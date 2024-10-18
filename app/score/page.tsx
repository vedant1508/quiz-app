"use client";

import React, { useEffect, useState } from "react";
import Header_design from "../components/statics/header_design";
import Button from "../components/ui/button";
import ResultIndicator from "../components/ui/result-indicator";
import ScoreIndicator from "../components/ui/score-indicator";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import RadialChart from "../components/ui/radial-chart";

interface QuizResult {
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
}

const Page = () => {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/answers/result");
        if (!response.ok) {
          throw new Error("Failed to fetch result");
        }
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResult();
  }, []);

  const handleReset = async () => {
    const response = await fetch("/api/answers/reset", {
      method: "GET",
    });

    if (response.ok) {
      router.push(`/`);
    }
  };

  const scorePercentage = result
    ? Math.round((result.correctAnswers / result.totalQuestions) * 100)
    : 0;

  return (
    <div className="relative flex flex-col justify-start w-full h-screen bg-[#AF9CF3]">
      <div className="relative">
        <Header_design />
      </div>
      <div className="absolute bottom-0 w-full h-[85%] rounded-t-[55px] bg-white z-40 p-8 md:p-10 lg:p-12">
        <div className="font-semibold text-zinc-800 text-2xl w-full flex justify-center pb-4">
          <span>Your Result</span>
        </div>
        <div className="w-full flex flex-col md:flex-row h-[85%] mt-5">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Loader2 className="w-12 h-12 animate-spin text-[#AF9CF3]" />
              <p className="mt-4 text-lg font-semibold text-gray-600">
                Loading Result...
              </p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-lg font-semibold text-red-500">{error}</p>
            </div>
          ) : result ? (
            <>
              <div className="w-full md:w-1/2 flex justify-center">
                <RadialChart percentage={scorePercentage} />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-12">
                <div className="space-y-5">
                  <ResultIndicator
                    variant={"correct"}
                    count={result.correctAnswers}
                    label={"Correct"}
                  />
                  <ResultIndicator
                    variant={"incorrect"}
                    count={result.incorrectAnswers}
                    label={"Incorrect"}
                  />
                </div>
                <div>
                  <Button
                    value={"Start Again"}
                    className="w-full mt-3"
                    onClick={handleReset}
                  />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
