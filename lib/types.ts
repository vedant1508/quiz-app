export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswers: string[];
  isMultipleCorrect: boolean;
  image?: string
}

export interface UserAnswer {
  questionId: string;
  selectedOptions: string[];
}
