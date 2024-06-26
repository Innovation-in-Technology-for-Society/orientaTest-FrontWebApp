import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { UserService } from '../../user/services/user.service';
import { AnswerService } from '../services/answer.service';
import { TestService } from '../services/test.service';

interface Pregunta {
  id: number;
  enunciado: string;
}

interface TestPregunta {
  pregunta_id: Pregunta;
}

@Component({
  selector: 'app-vocacional',
  templateUrl: './vocacional.component.html',
  styleUrls: ['./vocacional.component.css']
})
export class VocacionalComponent implements OnInit {
  questions: TestPregunta[] = [];
  answers: number[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.userService.getLoggedInUserId().subscribe(
      userId => {
        this.questionService.getQuestions('vocacional', userId).subscribe(
          (data) => {
            this.questions = data;
            this.answers = new Array(this.questions.length).fill(-1);
          },
          (error) => {
            console.error('Error al obtener las preguntas vocacionales:', error);
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

  onNext() {
    if (this.answers.includes(-1)) {
      alert('Por favor, responda todas las preguntas.');
    } else {
      this.submitAnswers().then(() => {
        alert('Preguntas vocacionales completadas. Continúe con las de autopercepción.');
        this.router.navigate(['/test/autopercepcion']);
      });
    }
  }

  async submitAnswers() {
    let userId = await this.userService.getLoggedInUserId().toPromise();
    userId = userId || 0; // Asigna 0 si userId es undefined
  
    try {
      const test = await this.testService.getCurrentTest(userId).toPromise();
      const testId = test.id;
  
      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i].pregunta_id;
        const answerValue = this.answers[i];
        await this.answerService.answerQuestion(testId, question.id, answerValue).toPromise();
      }
  
      alert('Respuestas enviadas exitosamente.'); // Mensaje de éxito
      this.router.navigate(['/test/autopercepcion']);
    } catch (error) {
      console.error('Error al obtener el test actual del usuario o al enviar respuestas:', error);
    }
  }  
}
