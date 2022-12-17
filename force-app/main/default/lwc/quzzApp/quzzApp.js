import { LightningElement } from 'lwc';

export default class QuzzApp extends LightningElement {

    myQuestions=[{
        id:"Question1",
        question:"Whic on of the following is not a template loop?",
        answers:{
            a:"for-each",
            b:"iterator",
            c: "map loop"
        },
        correctAnswer:"c"
    },
    {
            id:"Question2",
            question:"Which of the invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c: ".js"
            },
            correctAnswer:"b"
        },
        {

          
                id:"Question3",
                question:"Which one of the following is not a tdirective?",
                answers:{
                    a:"for-each",
                    b:"if:true",
                    c: "@track"
                },
                correctAnswer:"c"
            }
]
changeHandler(event){
   console.log("name", event.target.name) 
   console.log("value", event.target.value)
}

}