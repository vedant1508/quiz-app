import React from 'react'
import Image from 'next/image'

interface QuestionProps {
    que: string,
    image?: string
}

const Questions = ({que, image}: QuestionProps) => {
  return (
    <div
    id="question"
    className="w-full md:w-3/5 flex flex-col md:gap-10 text-[22px] md:text-[24px] font-semibold text-zinc-700 tracking-tight p-4 md:p-0 hide-scrollbar md:h-auto"
  >
    <p>{que}</p>
    { image  && (<div className="relative w-full h-[40vh] min-h-[200px] md:w-[50%] md:h-[60%]">
      <Image
        src={image}
        alt="question image"
        fill
        className="object-contain rounded"
      />
    </div>)}
  </div>

  )
}

export default Questions;