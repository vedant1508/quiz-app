import { NextResponse } from "next/server";
import { clearUserAnswers } from "@/lib/userAnswers";

export async function GET() {
  clearUserAnswers();
  return NextResponse.json(
    { message: "User answers have been reset." },
    { status: 200 }
  );
}
