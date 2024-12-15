import Header from "@/components/common/header";
import NMain from "@/components/n-main";


export default function Home() {
  return (
    <main className="h-screen w-screen p-5 overflow-x-hidden">
      <Header headerText="로그인" headerLink="/login" />
      <NMain />
    </main>
  );
}
