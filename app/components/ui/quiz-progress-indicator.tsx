interface QuizProgressIndicatorProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgressIndicator({
  currentQuestion,
  totalQuestions,
}: QuizProgressIndicatorProps) {
  const progress = (currentQuestion / totalQuestions) * 100;
  const circumference = 2 * Math.PI * 40;

  return (
    <div className="absolute z-50 left-[37%] top-[14%] md:left-[45%] lg:left-[60px] lg:top-[46px] bg-white rounded-full flex items-center justify-center w-[100px] h-[100px]">
      <svg className="w-[90px] h-[90px] transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="45"
          cy="45"
        />
        <circle
          className="text-green-500"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="45"
          cy="45"
        />
      </svg>
      <div className="absolute flex items-end justify-evenly font-bold">
        <span className="text-4xl text-zinc-800">{currentQuestion}</span>
        <span className="text-sm text-zinc-300">/{totalQuestions}</span>
      </div>
    </div>
  );
}
