import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { UserService } from '../../user/services/user.service';
import { AnswerService } from '../services/answer.service';
import { TestService } from '../services/test.service';
import { SharedService } from '../../shared/services/shared.service';

interface Pregunta {
  id: number;
  enunciado: string;
}

@Component({
  selector: 'app-autopercepcion',
  templateUrl: './autopercepcion.component.html',
  styleUrls: ['./autopercepcion.component.css']
})
export class AutopercepcionComponent implements OnInit {
  questions: Pregunta[] = [];
  answers: number[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private testService: TestService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.userService.getLoggedInUserId().subscribe(
      userId => {
        this.questionService.getQuestions('auto-percepcion', userId).subscribe(
          (data) => {
            this.questions = data.map(tp => tp.pregunta_id); // Mapear TestPregunta a Pregunta
            this.answers = new Array(this.questions.length).fill(-1);
          },
          (error) => {
            console.error('Error al obtener las preguntas de autopercepción:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el ID del usuario logueado:', error);
      }
    );
  }

  onAnswer(index: number, answer: string) {
    if (answer.toLowerCase() === 'sí') {
      this.answers[index] = 1;
    } else if (answer.toLowerCase() === 'no') {
      this.answers[index] = 0;
    }
  }

  async onSubmit() {
    if (this.answers.includes(-1)) {
      alert('Por favor, responda todas las preguntas.');
      return;
    }

    try {
      let userId = await this.userService.getLoggedInUserId().toPromise();
      userId = userId || 0; // Asigna 0 si userId es undefined

      const test = await this.testService.getCurrentTest(userId).toPromise();
      const testId = test.id;
      this.sharedService.setTestId(testId);

      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i];
        const answerValue = this.answers[i];
        await this.answerService.answerQuestion(testId, question.id, answerValue).toPromise();
      }

      alert('Test completado. Gracias por participar.');

      await this.testService.generateResultado(testId).toPromise();

      alert('Resultado generado correctamente.');
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error al obtener el test actual del usuario o al enviar respuestas:', error);
      alert('Ocurrió un error al enviar las respuestas. Por favor, inténtalo de nuevo más tarde.');
    }
  }
}
