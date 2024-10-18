import { NextResponse } from 'next/server';
import { UserAnswer } from "@/lib/types";
import { userAnswers } from '@/lib/userAnswers';

export async function POST(request: Request) {
  const body = await request.json();
  const { questionId, selectedOptions } = body as UserAnswer;

  const existingAnswerIndex = userAnswers.findIndex(
    (answer) => answer.questionId === questionId
  );
  
  if (existingAnswerIndex > -1) {
    userAnswers[existingAnswerIndex].selectedOptions = selectedOptions;
  } else {
    userAnswers.push({ questionId, selectedOptions });
  }

  return NextResponse.json({ message: "Answer saved successfully" }, { status: 200 });
}