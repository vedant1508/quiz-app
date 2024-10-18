import { NextResponse } from "next/server";
import { questions } from "@/lib/question";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const total_questions = questions.length;
  const question = questions.find((q) => q.id === id);

  if (!question) {
    return NextResponse.json(
      { message: "Question not found" },
      { status: 404 }
    );
  }
  return NextResponse.json({question, total_questions});
}
