import { useTransition } from 'react';
import { 
    ADD_QUESTION,ADD_USERNAME
  } from './actions';
  
  
  const initialState = {
    questions: [
        {
        id:1,
        question: "What does CSS stand for?",
        multiple:true,
        answers:[
            {
                answer:"Computer Style Sheets",
                correct:false
            },
            {
                answer:"Cascading Style Sheets",
                correct:true
            },
            {
                answer:"Cascading Style Sheets",
                correct:true
            },
            {
                answer:"Creative Style Sheets",
                correct:false
            }]
        }
      ,
        {
          id:2,
          question:
            "Where in an HTML document is the correct place to refer to an external style sheet?",
            multiple:false,
            answers:[
                {
                    answer:"In the <body> section",
                    correct:false
                },
                {
                    answer:"At the end of the document",
                    correct:false
                },
                {
                    answer:"You can't refer to an external style sheet",
                    correct:false
                },
                {
                    answer:"In the <head> section ",
                    correct:true
                }] 
         
        },
        {
            id:3,
          question: "Which HTML tag is used to define an internal style sheet?",
          multiple:false,
          answers:[
            {
                answer:"<style>",
                correct:true
            },
            {
                answer:"<headStyle>",
                correct:false
            },
            {
                answer:"<css>",
                correct:false
            },
            {
                answer:"<script>",
                correct:false
            }] 
            
        
        },
        {
            id:4,
          question: "Which HTML attribute is used to define inline styles?",
          multiple:true,
          answers:[
            {
                answer:"class",
                correct:false
            },
            {
                answer:"font",
                correct:false
            },
            {
                answer:"style",
                correct:true
            },
            {
                answer:"style",
                correct:true
            }] 
            
        },
        {
            id:5,
          question: "Which is the correct CSS syntax?",
          multiple:false,
          answers:[
            {
                answer:"{body:color=black;}",
                correct:false
            },
            {
                answer:"{body;color:black;}",
                correct:false
            },
            {
                answer:"body:color=black;",
                correct:false
            },
            {
                answer:"body {color: black;}",
                correct:true
            }] 
          
        },
        {
            id:6,
          question: "How do you insert a comment in a CSS file?",
          multiple:false,
          answers:[
            {
                answer:"' this is a comment",
                correct:false
            },
            {
                answer:"/* this is a comment */",
                correct:true
            },
            {
                answer:"// this is a comment //",
                correct:false
            },
            {
                answer:"// this is a comment",
                correct:false
            }] 
            
        },
      
      ],
    username:null
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_QUESTION: 
        return {
          ...state,
          questions: [...state.questions, action.payload] 
        }
        case ADD_USERNAME: 
        return {
          ...state,
          username: action.payload,
        }
      default:
        return state;
    }
  }