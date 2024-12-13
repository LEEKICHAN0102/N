import ChatRoom from "@/components/chats/chat-room";

export default function ChatsPage() {
  return (
    <main className="w-screen h-screen overflow-y-auto overflow-x-hidden p-5">
      <div className="grid grid-cols-5 gap-10">
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
