import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="w-full h-24 bg-black flex items-center justify-end p-5">
      <Link href="/login">
        <span className="text-white font-bold cursor-pointer w-auto h-auto p-3 bg-gray-400 rounded-full">로그인</span>
      </Link>
    </div>
  )
}