import{a as L,b as he}from"./chunk-KJCEJGLK.js";import{a as ve}from"./chunk-H67THGOJ.js";import{k as U,m as V}from"./chunk-Y2347BJ5.js";import{a as C}from"./chunk-DDAXRWUG.js";import{a as le,b,c as H,d as D,e as pe,f as de,g as me,i as ue,j as k,k as ge,l as fe,m as B}from"./chunk-YHAQZ7MM.js";import{Ba as te,Eb as c,Fb as R,Qa as v,Ra as d,Sa as ie,U as X,Ua as ne,V as Y,Wa as re,Y as g,Ya as oe,Z as _,Za as se,ba as h,ca as J,d as A,ec as ae,ga as f,ha as M,hb as F,ja as ee,jb as T,lc as N,nb as a,oa as P,ob as s,oc as ce,pa as I,pb as m,qb as q,tb as x,vb as O,yb as E}from"./chunk-MZIQDI5T.js";var xe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-home"]],decls:23,vars:0,consts:[[1,"home-container"],[1,"section","left"],[1,"section","right"],[1,"test-card","vocational"],[1,"test-card","auto-perception"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"div",1)(2,"h2"),c(3,"\xBFC\xF3mo funciona el Test?"),s(),a(4,"p"),c(5,"Lorem ipsum dolor sit amet consectetur. Semper morbi lobortis scelerisque tristique dictum eleifend nunc est in. Metus hac proin elementum lobortis ullam."),s(),a(6,"p"),c(7,"Amet mollis mauris nulla euismod condimentum integer mauris consectetur purus. Egestas convallis facilisi egestas suspendisse nunc netus tellus. Velit adipiscing euismod blandit duis feugiat fringilla."),s(),a(8,"p"),c(9,"Pulvinar elementum maecenas pretium dui turpis tempus consequat aliquet. Cras in et massa a neque sed. Vel aliquam mattis lacinia at."),s()(),a(10,"div",2)(11,"div",3)(12,"h3"),c(13,"VOCACIONAL"),s(),a(14,"p"),c(15,"Explora tus diversos intereses de vocaci\xF3n"),s()(),a(16,"div",4)(17,"h3"),c(18,"AUTO "),m(19,"br"),c(20,"PERCEPCI\xD3N"),s(),a(21,"p"),c(22,"Explora tus cualidades, identidad y capacidad"),s()()()())},styles:['.home-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:20px}.section[_ngcontent-%COMP%]{flex:1;padding:20px}.left[_ngcontent-%COMP%]{border-right:2px solid #000}.left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{background-color:var(--color4);padding:10px;border-radius:15px;text-align:center;font-size:24px}.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:15px;line-height:1.6}.right[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.test-card[_ngcontent-%COMP%]{position:relative;width:300px;height:300px;border-radius:15px;margin:10px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end}.test-card.vocational[_ngcontent-%COMP%]{transform:rotate(-19.6deg)}.test-card.auto-perception[_ngcontent-%COMP%]{transform:rotate(19.6deg)}.test-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-size:80%;background-repeat:no-repeat;background-position:center;z-index:0}.test-card.vocational[_ngcontent-%COMP%]:before{transform:rotate(19.6deg);background-image:url("./media/vector-test-LKETIZFG.png")}.test-card.auto-perception[_ngcontent-%COMP%]:before{transform:rotate(19.6deg);background-image:url("./media/vector-test-LKETIZFG.png")}.test-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;text-align:center;padding:2px;margin:auto;z-index:.5;font-size:35px;font-weight:700}.test-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;z-index:1;margin:82px;padding-bottom:20px;text-align:center;width:50%}']});let n=e;return n})();var y=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=C.apiUrl}getLoggedInUserId(){return this.http.get(`${this.baseUrl}/auth/user/id`)}};e.\u0275fac=function(i){return new(i||e)(h(b))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var j=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=C.apiUrl}getQuestions(t,i){let r=`${this.baseUrl}/test-preguntas/${i}/${t}`;return this.http.get(r)}};e.\u0275fac=function(i){return new(i||e)(h(b))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var $=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=C.apiUrl}answerQuestion(t,i,r){let l=`${this.baseUrl}/test-preguntas/${t}/${i}/responder`;return this.http.post(l,{valor:r})}};e.\u0275fac=function(i){return new(i||e)(h(b))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var w=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=C.apiUrl}getCurrentTest(t){let i=`${this.baseUrl}/tests/${t}`;return this.http.get(i)}iniciarTest(t){let i=`${this.baseUrl}/tests`,r={estudiante_id:t};return this.http.post(i,r)}generateResultado(t){let i=`${this.baseUrl}/tests/${t}/resultado`;return this.http.post(i,{})}};e.\u0275fac=function(i){return new(i||e)(h(b))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function je(n,e){if(n&1){let o=q();a(0,"div",4)(1,"div",5),c(2),s(),a(3,"div",6)(4,"label")(5,"input",7),x("change",function(){let i=P(o).index,r=O();return I(r.onAnswer(i,"s\xED"))}),s(),c(6," S\xED "),s(),a(7,"label")(8,"input",7),x("change",function(){let i=P(o).index,r=O();return I(r.onAnswer(i,"no"))}),s(),c(9," No "),s()()()}if(n&2){let o=e.$implicit,t=e.index;v(2),R(o.pregunta_id.enunciado),v(3),E("name","question",t,""),v(3),E("name","question",t,"")}}var ye=(()=>{let e=class e{constructor(t,i,r,l,p){this.router=t,this.userService=i,this.questionService=r,this.answerService=l,this.testService=p,this.questions=[],this.answers=[]}ngOnInit(){this.userService.getLoggedInUserId().subscribe(t=>{this.questionService.getQuestions("vocacional",t).subscribe(i=>{this.questions=i,this.answers=new Array(this.questions.length).fill(-1)},i=>{console.error("Error al obtener las preguntas vocacionales:",i)})},t=>{console.error("Error al obtener el ID del usuario logueado:",t)})}onAnswer(t,i){i.toLowerCase()==="s\xED"?this.answers[t]=1:i.toLowerCase()==="no"&&(this.answers[t]=0)}onNext(){this.answers.includes(-1)?alert("Por favor, responda todas las preguntas."):this.submitAnswers().then(()=>{alert("Preguntas vocacionales completadas. Contin\xFAe con las de autopercepci\xF3n."),this.router.navigate(["/test/autopercepcion"])})}submitAnswers(){return A(this,null,function*(){let t=yield this.userService.getLoggedInUserId().toPromise();t=t||0;try{let r=(yield this.testService.getCurrentTest(t).toPromise()).id;for(let l=0;l<this.questions.length;l++){let p=this.questions[l].pregunta_id,S=this.answers[l];yield this.answerService.answerQuestion(r,p.id,S).toPromise()}alert("Respuestas enviadas exitosamente."),this.router.navigate(["/test/autopercepcion"])}catch(i){console.error("Error al obtener el test actual del usuario o al enviar respuestas:",i)}})}};e.\u0275fac=function(i){return new(i||e)(d(k),d(y),d(j),d($),d(w))},e.\u0275cmp=f({type:e,selectors:[["app-vocacional"]],decls:7,vars:1,consts:[[1,"test-container"],[1,"questions-container"],["class","question-row",4,"ngFor","ngForOf"],[3,"click"],[1,"question-row"],[1,"question-text"],[1,"answer-options"],["type","radio",3,"change","name"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"h2"),c(2,"Test Vocacional"),s(),a(3,"div",1),F(4,je,10,5,"div",2),s(),a(5,"button",3),x("click",function(){return r.onNext()}),c(6,"Siguiente"),s()()),i&2&&(v(4),T("ngForOf",r.questions))},dependencies:[N],styles:[".test-container[_ngcontent-%COMP%]{width:60%;margin:30px auto;text-align:center;background-color:#f0f0f0;padding:20px;border-radius:10px}h2[_ngcontent-%COMP%]{background-color:#c2a2f0;padding:10px;border-radius:20px;margin-right:200px;margin-left:200px;color:#000;margin-top:0}.questions-container[_ngcontent-%COMP%]{margin-top:20px}.question-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;background-color:#e0d7f3;padding:10px;border-radius:10px}.question-text[_ngcontent-%COMP%]{flex:1;text-align:left;padding:10px}.answer-options[_ngcontent-%COMP%]{display:flex;gap:20px}button[_ngcontent-%COMP%]{background-color:#c2a2f0;color:#000;border:none;padding:10px 20px;margin-top:20px;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#b08add}"]});let n=e;return n})();function Ae(n,e){if(n&1){let o=q();a(0,"div",4)(1,"div",5),c(2),s(),a(3,"div",6)(4,"label")(5,"input",7),x("change",function(){let i=P(o).index,r=O();return I(r.onAnswer(i,"s\xED"))}),s(),c(6," S\xED "),s(),a(7,"label")(8,"input",7),x("change",function(){let i=P(o).index,r=O();return I(r.onAnswer(i,"no"))}),s(),c(9," No "),s()()()}if(n&2){let o=e.$implicit,t=e.index;v(2),R(o.enunciado),v(3),E("name","question",t,""),v(3),E("name","question",t,"")}}var we=(()=>{let e=class e{constructor(t,i,r,l,p,S){this.router=t,this.userService=i,this.questionService=r,this.answerService=l,this.testService=p,this.sharedService=S,this.questions=[],this.answers=[]}ngOnInit(){this.userService.getLoggedInUserId().subscribe(t=>{this.questionService.getQuestions("auto-percepcion",t).subscribe(i=>{this.questions=i.map(r=>r.pregunta_id),this.answers=new Array(this.questions.length).fill(-1)},i=>{console.error("Error al obtener las preguntas de autopercepci\xF3n:",i)})},t=>{console.error("Error al obtener el ID del usuario logueado:",t)})}onAnswer(t,i){i.toLowerCase()==="s\xED"?this.answers[t]=1:i.toLowerCase()==="no"&&(this.answers[t]=0)}onSubmit(){return A(this,null,function*(){if(this.answers.includes(-1)){alert("Por favor, responda todas las preguntas.");return}try{let t=yield this.userService.getLoggedInUserId().toPromise();t=t||0;let r=(yield this.testService.getCurrentTest(t).toPromise()).id;this.sharedService.setTestId(r);for(let l=0;l<this.questions.length;l++){let p=this.questions[l],S=this.answers[l];yield this.answerService.answerQuestion(r,p.id,S).toPromise()}alert("Test completado. Gracias por participar."),yield this.testService.generateResultado(r).toPromise(),alert("Resultado generado correctamente."),this.router.navigate(["/"])}catch(t){console.error("Error al obtener el test actual del usuario o al enviar respuestas:",t),alert("Ocurri\xF3 un error al enviar las respuestas. Por favor, int\xE9ntalo de nuevo m\xE1s tarde.")}})}};e.\u0275fac=function(i){return new(i||e)(d(k),d(y),d(j),d($),d(w),d(L))},e.\u0275cmp=f({type:e,selectors:[["app-autopercepcion"]],decls:7,vars:1,consts:[[1,"test-container"],[1,"questions-container"],["class","question-row",4,"ngFor","ngForOf"],[3,"click"],[1,"question-row"],[1,"question-text"],[1,"answer-options"],["type","radio",3,"change","name"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"h2"),c(2,"Test Autopercepci\xF3n"),s(),a(3,"div",1),F(4,Ae,10,5,"div",2),s(),a(5,"button",3),x("click",function(){return r.onSubmit()}),c(6,"Enviar"),s()()),i&2&&(v(4),T("ngForOf",r.questions))},dependencies:[N],styles:[".test-container[_ngcontent-%COMP%]{width:60%;margin:30px auto;text-align:center;background-color:#f0f0f0;padding:20px;border-radius:10px}h2[_ngcontent-%COMP%]{background-color:#c2a2f0;padding:10px;border-radius:20px;margin-right:200px;margin-left:200px;color:#000;margin-top:0}.questions-container[_ngcontent-%COMP%]{margin-top:20px}.question-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;background-color:#e0d7f3;padding:10px;border-radius:10px}.question-text[_ngcontent-%COMP%]{flex:1;text-align:left;padding:10px}.answer-options[_ngcontent-%COMP%]{display:flex;gap:20px}button[_ngcontent-%COMP%]{background-color:#c2a2f0;color:#000;border:none;padding:10px 20px;margin-top:20px;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#b08add}"]});let n=e;return n})();var Fe=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:xe},{path:"carreras",loadChildren:()=>import("./chunk-YMSOI5R6.js").then(n=>n.CarrerasModule)},{path:"resultados",loadChildren:()=>import("./chunk-ZGOVKG76.js").then(n=>n.ResultadosModule)},{path:"universidades",loadChildren:()=>import("./chunk-RGSN3EJ3.js").then(n=>n.UniversidadesModule)},{path:"user",loadChildren:()=>import("./chunk-PWI72IRY.js").then(n=>n.UserModule)},{path:"test/vocacional",component:ye},{path:"test/autopercepcion",component:we}],Se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=M({type:e}),e.\u0275inj=_({imports:[B.forRoot(Fe),B]});let n=e;return n})();var _e=(()=>{let e=class e{constructor(t,i){this.userService=t,this.testService=i}iniciarTest(){this.userService.getLoggedInUserId().subscribe(t=>{this.testService.iniciarTest(t).subscribe(i=>{console.log("Test iniciado correctamente:",i)},i=>{console.error("Error al iniciar el test:",i)})},t=>{console.error("Error al obtener el ID del estudiante logueado:",t)})}};e.\u0275fac=function(i){return new(i||e)(d(y),d(w))},e.\u0275cmp=f({type:e,selectors:[["app-navbar"]],decls:11,vars:0,consts:[[1,"navbar"],[1,"navbar-logo"],["routerLink","/home","routerLinkActive","active"],["src","../../../assets/images/navbar/vector-logo-orientatest.png","alt","orientaTest"],[1,"navbar-nav"],["routerLink","/universidades","routerLinkActive","active"],["src","../../../assets/images/navbar/vector-universidad.png","alt","universidades"],["routerLink","/test/vocacional","routerLinkActive","active",3,"click"],["src","../../../assets/images/navbar/vector-test.png","alt","test"],["routerLink","/user","routerLinkActive","active"],["src","../../../assets/images/navbar/vector-user.png","alt","cuenta"]],template:function(i,r){i&1&&(a(0,"header",0)(1,"div",1)(2,"a",2),m(3,"img",3),s()(),a(4,"nav",4)(5,"a",5),m(6,"img",6),s(),a(7,"a",7),x("click",function(){return r.iniciarTest()}),m(8,"img",8),s(),a(9,"a",9),m(10,"img",10),s()()())},dependencies:[ge,fe],styles:[".navbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:linear-gradient(to right,#f5efff,#a594f9);padding:10px}.navbar-logo[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:50%}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 4em}"]});let n=e;return n})();var Me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-footer"]],decls:27,vars:0,consts:[[1,"footer"],[1,"footer-section"],[1,"nosotros-columns"],[1,"column"],[1,"social-icons"],["href","#"],["src","../../../assets/images/footer/vector-fb.png","alt","Facebook"],["src","../../../assets/images/footer/vector-ig.png","alt","Instagram"]],template:function(i,r){i&1&&(a(0,"footer",0)(1,"div",1)(2,"h2"),c(3,"Nosotros"),s(),a(4,"div",2)(5,"div",3)(6,"p"),c(7,"Lorem "),a(8,"strong"),c(9,"misi\xF3n"),s(),c(10," dolor sit amet consectetur. In ornare facilisi ut erat eleifend suspendisse praesent."),s()(),a(11,"div",3)(12,"p"),c(13,"Lorem "),a(14,"strong"),c(15,"visi\xF3n"),s(),c(16," dolor sit amet consectetur. In ornare facilisi ut erat eleifend suspendisse praesent."),s()()()(),a(17,"div",1)(18,"h2"),c(19,"Cont\xE1ctanos"),s(),a(20,"p"),c(21,"its_tikafarma.contacto@gmail.com"),s(),a(22,"div",4)(23,"a",5),m(24,"img",6),s(),a(25,"a",5),m(26,"img",7),s()()()())},styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;background:linear-gradient(to right,#e3e0fd,#ab9ef4);padding:0 20px 20px;color:#000}.footer-section[_ngcontent-%COMP%]{flex:1;padding:0 20px}.footer-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700;font-size:large}.nosotros-columns[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.column[_ngcontent-%COMP%]{flex:1;padding:0 10px}.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.social-icons[_ngcontent-%COMP%]{display:flex;align-items:center}.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:30px;margin-right:10px}"]});let n=e;return n})();var Pe=(()=>{let e=class e{constructor(){this.title="orienta-test"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"app-container"],[1,"content"]],template:function(i,r){i&1&&(a(0,"div",0),m(1,"app-navbar"),a(2,"div",1),m(3,"router-outlet"),s(),m(4,"app-footer"),s())},dependencies:[ue,_e,Me],styles:[".app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex-grow:1}"]});let n=e;return n})();var Re="@",Ne=(()=>{let e=class e{constructor(t,i,r,l,p){this.doc=t,this.delegate=i,this.zone=r,this.animationType=l,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=J(ne,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-VBTYF4ZI.js").then(i=>i)).catch(i=>{throw new Y(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let l=new r(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,i){let r=this.delegate.createRenderer(t,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let l=new K(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let S=p.createRenderer(t,i);l.use(S),this.scheduler?.notify(9)}).catch(p=>{l.use(r)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){ie()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})(),K=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,i){this.delegate.insertBefore(e,o,t,i)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,i){this.delegate.setAttribute(e,o,t,i)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,i){this.delegate.setStyle(e,o,t,i)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Re)}};function Ie(n="animations"){return oe("NgAsyncAnimations"),ee([{provide:re,useFactory:(e,o,t)=>new Ne(e,o,t,n),deps:[ae,pe,se]},{provide:te,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Oe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=M({type:e}),e.\u0275inj=_({providers:[j],imports:[ce,U,D]});let n=e;return n})();var W=(()=>{let e=class e{constructor(t,i){this.authService=t,this.router=i}intercept(t,i){let r=this.authService.auth()?.token,l;if(r){let p=t.clone({headers:t.headers.set("Authorization",`Bearer ${r}`)});l=i.handle(p)}else l=i.handle(t);return l.pipe(X({error:p=>{p instanceof le&&p.status===403&&(this.authService.logout(),this.router.navigate([""]))}}))}};e.\u0275fac=function(i){return new(i||e)(h(V),h(k))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=M({type:e,bootstrap:[Pe]}),e.\u0275inj=_({providers:[Ie(),V,ve,{provide:H,useClass:W,multi:!0},w,y,L,{provide:H,useClass:W,multi:!0}],imports:[me,he,U,D,Se,Oe]});let n=e;return n})();de().bootstrapModule(Ee).catch(n=>console.error(n));
