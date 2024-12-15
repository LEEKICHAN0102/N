import ChatRoom from "@/components/chats/chat-room";
import ChatMain from "@/components/chat-main";
import Header from "@/components/common/header";

export default function ChatsPage() {
  return (
    <main className="w-screen h-screen p-5 overflow-x-hidden overflow-y-auto">
      <Header headerText="방 생성하기" headerLink="/chats/create" />
        <div className="overflow-x-hidden py-20 px-5">
          <ChatMain />
          <div className="grid grid-cols-5 gap-10 p-10">
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
          </div>
        </div>
    </main>
  );
}
