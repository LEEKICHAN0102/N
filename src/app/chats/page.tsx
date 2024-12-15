import ChatRoom from "@/components/chats/chat-room";
import ChatMain from "@/components/chat-main";

export default function ChatsPage() {
  return (
    <main className="w-screen h-screen overflow-y-auto overflow-x-hidden py-20 px-5">
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
      </div>
    </main>
  );
}
