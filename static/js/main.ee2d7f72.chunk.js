(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{71:function(e,t,n){e.exports=n(84)},76:function(e,t,n){},77:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),l=n.n(c),o=(n(76),n(77),n(17)),u=n(121),s=n(86),i=function(e,t){return e/t<.3?"red":e/t<=.5?"orange":e/t<.7?"yellow":e/t<1?"green":"blue"},m=function(e){var t=e.numCorrect,n=e.numAnswered;return r.createElement(u.a,{className:"Result"},r.createElement(s.a,{variant:"h3"},"Game Over!"),r.createElement(s.a,{variant:"body1",style:{color:i(t,n)}},"You answered ",t," out of ",n," correct"),r.createElement(s.a,{variant:"h5"},"Play Again?"))},d=n(113),f=function(e,t,n,r){"LI"===t?n.add(e):null===r||void 0===r||r.classList.add(e)},v=function(){var e=document.querySelector(".Correct-Answer");null===e||void 0===e||e.classList.add("show-correct")};function E(e){var t=e.answer,n=e.handleAnswerQuestion,a=e.correct,c=Object(r.useState)(!0),l=Object(o.a)(c,2),u=l[0],s=l[1],i=function(){return r.createElement("span",{className:"AnswerText",dangerouslySetInnerHTML:{__html:t}})},m=function(e){var r=e.nativeEvent;n(t,r,a),setTimeout((function(){return s(!u)}),1e3)};return Object(r.useEffect)((function(){return function(){var e=document.querySelectorAll(".Answer");Array.from(e).forEach((function(e){e.classList.remove("selected"),e.classList.remove("show-correct")}))}()}),[u]),a?r.createElement(d.a,{id:t,className:"Answer Correct-Answer",divider:!0,onClick:m},i()):r.createElement(d.a,{id:t,className:"Answer Incorrect-Answer",divider:!0,onClick:m},i())}var b=n(114),h=["Correct!!","That's Right!!","You got it right!","Good job!","Well done!","Strong work there!!"],p=["Wrong","Not quite","That's not it","Sorry","Uh oh","Whoops"],w=function(e){var t=e.question,n=e.answerQuestion,a=Object(r.useRef)(!1),c=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}(null===t||void 0===t?void 0:t.incorrect_answers.concat(t.correct_answer)),l=function(e,t,r){a.current||(a.current=!0,function(e,t){if(e.target){var n=e.target,r=n.classList,a=n.tagName,c=n.parentElement;t||v(),f("selected",a,r,c)}}(t,r),function(e){var t=document.querySelector(".Feedback");if(t){if(e){var n=Math.floor(Math.random()*h.length),r=h[n];t.textContent=r,t.classList.add("correct")}else{var a=Math.floor(Math.random()*h.length),c=p[a];t.textContent=c,t.classList.add("incorrect")}null===t||void 0===t||t.setAttribute("style","display: block")}}(r),setTimeout((function(){!function(){var e=document.querySelector(".Feedback");e&&(null===e||void 0===e||e.setAttribute("style","display: hidden"),e.textContent="",e.classList.remove("correct","incorrect"))}(),n(e),a.current=!1}),1e3))};return r.createElement(u.a,{className:"QuizCard","data-testid":"QuizTest"},r.createElement(s.a,{variant:"h5",dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.question}}),r.createElement(b.a,{className:"QuizCardList"},c.map((function(e){return e===t.correct_answer?r.createElement(E,{handleAnswerQuestion:l,answer:e,key:e,correct:!0}):r.createElement(E,{handleAnswerQuestion:l,answer:e,key:e})}))))},g=n(40),y=n(119),O=n(115),S=n(116),j=n(123),_=n(117),A=n(122),N=n(118),k=function(e){var t=e.startGame,n=Object(r.useState)("10"),a=Object(o.a)(n,2),c=a[0],l=a[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),m=i[0],d=i[1],f=Object(r.useState)("multiple"),v=Object(o.a)(f,2),E=v[0],b=v[1];return r.createElement(u.a,{className:"Start"},r.createElement(y.a,{label:"Number of Questions",type:"number",value:c,onChange:function(e){return l(e.target.value)}}),r.createElement(O.a,{component:"fieldset"},r.createElement(S.a,{component:"legend"},"Difficulty"),r.createElement(j.a,{row:!0,"aria-label":"difficulty",name:"difficulty",value:m,onChange:function(e){return d(e.target.value)}},r.createElement(_.a,{value:"easy",control:r.createElement(A.a,null),label:"Easy",labelPlacement:"end"}),r.createElement(_.a,{value:"medium",control:r.createElement(A.a,null),label:"Medium",labelPlacement:"end"}),r.createElement(_.a,{value:"hard",control:r.createElement(A.a,null),label:"Hard",labelPlacement:"end"}),r.createElement(_.a,{value:"",control:r.createElement(A.a,null),label:"Surprise Me!",labelPlacement:"end"}))),r.createElement(O.a,{component:"fieldset"},r.createElement(S.a,{component:"legend"},"Type"),r.createElement(j.a,{row:!0,"aria-label":"type",name:"type",value:E,onChange:function(e){return b(e.target.value)}},r.createElement(_.a,{value:"multiple",control:r.createElement(A.a,null),label:"Multiple Choice",labelPlacement:"end"}),r.createElement(_.a,{value:"boolean",control:r.createElement(A.a,null),label:"True/False",labelPlacement:"end"}))),r.createElement(N.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:function(){return t(c,m,E)}},"Start New Game"))},T=n(48),C=n.n(T),L=n(57),M="https://opentdb.com/api.php";function Q(e){return{type:"ADD_QUESTIONS",payload:e.results.map((function(e){return{question:e.question,correct_answer:e.correct_answer,incorrect_answers:e.incorrect_answers}}))}}function q(){return{type:"QUESTIONS_FAIL"}}var x=function(){return r.createElement("p",{className:"Feedback","data-testid":"Feedback"})},I={question:"",correct_answer:"",incorrect_answers:[]},F=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.questions})),n=Object(r.useState)(I),c=Object(o.a)(n,2),l=c[0],s=c[1],i=Object(r.useState)(0),d=Object(o.a)(i,2),f=d[0],v=d[1],E=Object(r.useState)(0),b=Object(o.a)(E,2),h=b[0],p=b[1];return Object(r.useEffect)((function(){t.length&&s((function(){return t[f]}))}),[t,f]),a.a.createElement(u.a,{className:"TriviaGame"},f<t.length&&l!==I&&a.a.createElement(w,{question:l,answerQuestion:function(e){l&&e===l.correct_answer?(p((function(e){return e+1})),v((function(e){return e+1}))):v((function(e){return e+1}))}}),0!==t.length&&f===t.length&&a.a.createElement(m,{numCorrect:h,numAnswered:f}),(f===t.length||!t.length)&&a.a.createElement(k,{startGame:function(t,n,r){e({type:"REMOVE_QUESTIONS"}),e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"multiple";return function(){var r=Object(L.a)(C.a.mark((function r(a){var c,l,o,u;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!t){r.next=11;break}return r.next=4,fetch("".concat(M,"?amount=").concat(e,"&type=").concat(n,"&difficulty=").concat(t));case 4:return c=r.sent,r.next=7,c.json();case 7:l=r.sent,a(Q(l)),r.next=18;break;case 11:return r.next=13,fetch("".concat(M,"?amount=").concat(e,"&type=").concat(n));case 13:return o=r.sent,r.next=16,o.json();case 16:u=r.sent,a(Q(u));case 18:r.next=24;break;case 20:r.prev=20,r.t0=r.catch(0),console.log(r.t0),a(q());case 24:case"end":return r.stop()}}),r,null,[[0,20]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,r)),s((function(){return I})),p((function(){return 0})),v((function(){return 0}))}}),a.a.createElement(x,null))},D=function(){return a.a.createElement("footer",{className:"Footer"},a.a.createElement("p",null,a.a.createElement("a",{"data-testid":"footer",href:"https://github.com/druserkes",target:"_blank",rel:"noopener noreferrer"},"Dru Serkes \xa92020")))};var P=function(){return a.a.createElement(u.a,{className:"App"},a.a.createElement(s.a,{gutterBottom:!0,variant:"h1"},"Let's Trivia!"),a.a.createElement(F,null),a.a.createElement(D,null))},U=n(20),G=n(58),R=n(59),W=n(60),z=[],H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUESTIONS":return Object(W.a)(t.payload);case"REMOVE_QUESTIONS":return[];case"QUESTIONS_FAIL":return[{question:"there was an error, please try again",correct_answer:"",incorrect_answers:[]}];default:return e}},B=Object(U.combineReducers)({questions:H}),J=Object(U.createStore)(B,Object(G.composeWithDevTools)(Object(U.applyMiddleware)(R.a)));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g.a,{store:J},a.a.createElement(P,null))),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ee2d7f72.chunk.js.map