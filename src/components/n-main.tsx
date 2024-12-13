"use client";

import n_main from "../../public/n_main.svg";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { GrFormNextLink } from "react-icons/gr";

const phrase = [
  "상상력이 뛰어난",
  "타인과의 대화를 즐기는",
  "논리를 좋아하는",
];

export default function NMain() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrase.length);
        setFadeOut(false);
      }, 1000);

    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen p-12 flex gap-20 justify-center items-center">
      <div className="flex flex-col gap-3 font-bold text-3xl">
        <span
          className={`transition-all duration-1000 ease-in-out ${
            fadeOut ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
          {"\""}{phrase[currentPhraseIndex]}{"\""}
        </span>
        <span className="italic">당신을 위한 특별한 커뮤니티</span>
        <div className="flex justify-center items-center rounded-full w-full h-16 p-3 bg-orange-400 mt-12">
          <Link className="flex gap-5" href="/chats">
            <GrFormNextLink className="scale-125" />채팅방 둘러보기
          </Link>
        </div>
      </div>
      <div className="w-1/3 h-auto bg-inherit">
        <Image 
          src={n_main} 
          alt="N Main Logo" 
          layout="responsive" 
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
