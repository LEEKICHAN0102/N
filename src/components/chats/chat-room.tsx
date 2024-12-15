import { IoPeople } from "react-icons/io5";

export default function ChatRoom() {
  return(
    <div className="bg-amber-100 min-h-72 max-w-64 flex flex-col p-3 items-center rounded-md border-gray-400 gap-5 cursor-pointer">
      <span className="font-bold text-md text-black">헤라클레스 장수풍뎅이 VS 코카서스 장수풍뎅이</span>
      <div className="flex gap-2 items-center justify-start w-64 p-3">
        <span className="flex items-center justify-center p-3 text-sm font-bold rounded-full w-auto h-8 bg-gray-400">곤충</span>
        <span className="flex items-center justify-center p-3 text-sm font-bold rounded-full w-auto h-8 bg-gray-400">기타</span>
      </div>
      <div className="flex items-center justify-end w-64 p-5 text-gray-500 font-bold text-sm">2024-12-13</div>
      <div className="p-3 w-60 flex items-center justify-between border-t border-b border-black mt-auto">
        <span className="text-black font-bold text-sm">방만든사람</span>
        <span className="text-gray-500 font-bold text-sm flex items-center justify-center gap-3">
          <IoPeople />
          30
        </span>
      </div>
    </div>
  )
}
