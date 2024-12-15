import Link from "next/link";

interface HeaderProps {
  headerText: string;
  headerLink: string;
}

export default function Header({ headerText, headerLink }: HeaderProps) {
  return (
    <div className="w-full h-24 bg-black flex items-center justify-end p-5">
      <Link href={headerLink}>
        <span className="text-white font-bold cursor-pointer w-auto h-auto p-3 bg-gray-400 rounded-full">{headerText}</span>
      </Link>
    </div>
  )
}