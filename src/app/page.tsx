"use client";

import { useEffect } from "react";
import Header from "@/components/common/header";
import NMain from "@/components/n-main";
import Loading from "@/components/common/Loading";

import { useAuthStore, syncAuthState } from "@/store/authStore";

export default function Home() {
  const isLogin = useAuthStore((state) => state.isLogin);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    syncAuthState();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <main className="h-screen w-screen p-5 overflow-x-hidden">
      {isLogin ? (
        <Header headerText="로그아웃" headerLink="/logout" />
      ) : (
        <Header headerText="로그인" headerLink="/login" />
      )}
      <NMain />
    </main>
  );
}
