"use client";

import React, { useEffect, useState } from "react";
import Header_design from "../../components/statics/header_design";
import Option_checkbox from "../../components/ui/option-checkbox";
import Button from "../../components/ui/button";
import { MoveRight, Loader2 } from "lucide-react";
import Questions from "../../components/ui/questions";
import { Question } from "@/lib/types";
import Link from "next/link";
import QuizProgressIndicator from "@/app/components/ui/quiz-progress-indicator";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/questions/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch question");
        }
        const data = await response.json();
        setQuestion(data.question);
        setTotalQuestions(data.total_questions);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, [params.id]);

  const handleSelect = (option: string) => {
    if (question?.isMultipleCorrect) {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option)
          : [...prev, option]
      );
      console.log(selectedOptions);
    } else {
      setSelectedOptions((prev) => (prev.includes(option) ? [] : [option]));
      console.log(selectedOptions);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/answers/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: params.id,
          selectedOptions,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit answer");
      }
      const data = await response.json();
      if (parseInt(params.id) == totalQuestions) {
        router.push(`/score`);
      } else {
        router.push(`/quiz/${parseInt(params.id as string) + 1}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="relative flex flex-col justify-start w-full h-screen bg-[#AF9CF3]">
      <div className="relative">
        <Header_design />
      </div>
      <QuizProgressIndicator
        currentQuestion={parseInt(params.id)}
        totalQuestions={totalQuestions}
      />
      <div className="absolute bottom-0 w-full overflow-y-auto hide-scrollbar h-[80%] lg:h-[85%] rounded-t-[55px] bg-white z-40 flex flex-col md:flex-row pb-4 px-8 pt-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Loader2 className="w-12 h-12 animate-spin text-[#AF9CF3]" />
            <p className="mt-4 text-lg font-semibold text-gray-600">
              Loading question...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-lg font-semibold text-red-500">{error}</p>
          </div>
        ) : question ? (
          <>
            <Questions que={question.text} image={question.image} />
            <div
              id="options"
              className="w-full md:w-2/5 px-4 md:px-6 flex flex-col justify-between md:gap-3 hide-scrollbar md:mt-0 max-h-[calc(100vh-700px)] md:max-h-none"
            >
              <div className="space-y-3">
                {question.options.map((option: string, index: number) => (
                  <Option_checkbox
                    key={index}
                    value={option}
                    isChecked={selectedOptions.includes(option)}
                    onSelect={() => handleSelect(option)}
                    mul={question.isMultipleCorrect}
                  />
                ))}
              </div>
              {parseInt(params.id) == totalQuestions ? (
                <Link href={`/score`}>
                  <Button
                    value="Submit"
                    Icon={MoveRight}
                    className="font-semibold text-[16px] md:text-[18px] mt-4 w-full outline-none"
                    onClick={handleSubmit}
                  />
                </Link>
              ) : (
                <Link href={`/quiz/${parseInt(params.id) + 1}`}>
                  <Button
                    value="Next"
                    Icon={MoveRight}
                    className="font-semibold text-[16px] md:text-[18px] mt-4 w-full outline-none"
                    onClick={handleSubmit}
                  />
                </Link>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
