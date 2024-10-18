import { Question } from "./types";

export const questions: Question[] = [
  {
    id: "1",
    text: "What is the capital of France?",
    image: "https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A=",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswers: ["Paris"],
    isMultipleCorrect: false,
  },
  {
    id: "2",
    text: "Which of these are programming languages?",
    options: ["Python", "HTML", "CSS", "JavaScript"],
    correctAnswers: ["Python", "JavaScript"],
    isMultipleCorrect: true,
  },
  {
    "id": "3",
    "text": "Which of the following are database management systems?",
    "options": ["MySQL", "MongoDB", "HTML", "Java"],
    "correctAnswers": ["MySQL", "MongoDB"],
    "isMultipleCorrect": true
  },
  {
    "id": "4",
    "text": "Which of these are front-end frameworks?",
    "options": ["React", "Node.js", "Vue", "Django"],
    "correctAnswers": ["React", "Vue"],
    "isMultipleCorrect": true
  },
  {
    "id": "5",
    "text": "Which of the following are CSS preprocessors?",
    "options": ["Sass", "Less", "TypeScript", "JavaScript"],
    "correctAnswers": ["Sass", "Less"],
    "isMultipleCorrect": true
  }
];

export default questions;
