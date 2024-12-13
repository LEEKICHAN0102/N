import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="w-full h-24 bg-white flex items-center justify-between p-5">
      <Logo />
      <Link href="/login">
        <span className="text-black font-bold cursor-pointer">로그인</span>
      </Link>
    </div>
  )
}