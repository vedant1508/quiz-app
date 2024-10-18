import { NextResponse } from 'next/server';
import { questions } from "@/lib/question";
import { UserAnswer } from "@/lib/types";
import { userAnswers } from '@/lib/userAnswers';

export async function GET() {
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  userAnswers.forEach((userAnswer) => {
    const question = questions.find((q) => q.id === userAnswer.questionId);

    if (question) {
      const isCorrect = question.isMultipleCorrect
        ? question.correctAnswers.every((ans) =>
            userAnswer.selectedOptions.includes(ans)
          ) &&
          userAnswer.selectedOptions.every((opt) =>
            question.correctAnswers.includes(opt)
          )
        : question.correctAnswers[0] === userAnswer.selectedOptions[0];

      if (isCorrect) {
        correctAnswers += 1;
      } else {
        incorrectAnswers += 1;
      }
    }
  });

  return NextResponse.json({
    correctAnswers,
    incorrectAnswers,
    totalQuestions: questions.length
  }, { status: 200 });
}