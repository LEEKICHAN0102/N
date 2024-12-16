import Image from "next/image";
import chat_main from "../../public/chat_main.svg";

export default function ChatMain() {
  return(
    <div className="flex flex-col w-screen h-auto items-center justify-center">
      <div className="flex flex-col items-center gap-5 w-1/2">
        <span className="font-bold text-white text-3xl mr-32">지금 바로 채팅방에 참여하여</span>
        <span className="font-bold text-white text-3xl ml-32">다양한 주제들로 소통해보세요!</span>
      </div>
      <div className="w-1/2 h-auto bg-inherit">
        <Image 
          src={chat_main} 
          alt="N Main Logo" 
          priority
          className="rounded-lg"
        />
      </div>
    </div>
  )
}