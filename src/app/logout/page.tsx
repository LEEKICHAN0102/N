"use client";

import { auth } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogOutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth.signOut();
        router.push("/login");
      } catch (error) {
        console.error("로그아웃 오류:", error);
      }
    };

    handleLogout();
  }, [router]);

  return null;
}
