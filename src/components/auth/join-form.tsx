import Image from "next/image";
import Link from "next/link";

import { GrFormNextLink } from "react-icons/gr";

export default function Join() {
  return(
    <main className="w-full h-screen flex items-center justify-center flex-col">
      <form className="flex flex-col gap-5 w-1/3 h-1/2 items-center justify-center">
        <span className="text-2xl font-bold italic">Join N</span>
        <input className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="닉네임"
        />
        <input className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="E-mail"
          type="email"
        />
        <input className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="비밀 번호"
          type="password"
        />
        <input className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="비밀 번호 확인"
          type="password"
        />
        <button className="w-full h-12 rounded-md bg-blue-500 text-white p-3 font-bold"
          type="submit"
        >
          회원 가입
        </button>
      </form>
      <div className="flex mt-10 items-center justify-between w-1/3 h-auto">
        <Image
          src="/google_logo.png"
          alt="구글 로그인"
          width={50}
          height={50}
          className="rounded-lg cursor-pointer"
        />
        <Image
          src="/github_logo.png"
          alt="깃허브 로그인"
          width={50}
          height={50}
          className="rounded-lg bg-white p-1 cursor-pointer"
        />
      </div>
      <Link href="/login">
        <span className="font-bold text-blue-300 text-xl flex gap-5 items-center mt-10">
          <GrFormNextLink className="scale-125" />
          이미 계정이 있나요?
        </span>
      </Link>
    </main>
  )
}