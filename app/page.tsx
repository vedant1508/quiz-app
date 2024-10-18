import React from "react";
import Link from "next/link";
import Upraised_logo from "@/app/components/statics/upraised_logo";
import Quiz_logo from "@/app/components/statics/quiz_logo";
import Button from "@/app/components/ui/button";
import Head from "next/head";
import { MoveRight } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-t flex flex-col justify-between from-[#AF9CF3] to-white">
        <nav className="w-full flex justify-center items-center px-4 py-8">
          <Upraised_logo />
        </nav>
        <section className="w-full flex justify-center">
          <Quiz_logo />
        </section>
        <div className="w-full flex justify-center px-4 py-8">
          <Link href="/quiz/1">
            <Button value="Start" Icon={MoveRight}>
            </Button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default page;
