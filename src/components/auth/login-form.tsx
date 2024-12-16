"use client";

import Link from "next/link";
import Image from "next/image";

//libs
import { auth } from "@/libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GrFormNextLink } from "react-icons/gr";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      router.push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center flex-col">
      <form
        className="flex flex-col gap-5 w-1/3 h-1/2 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-2xl font-bold italic">Login N</span>
        <input
          className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="E-mail"
          type="email"
          {...register("email", { required: "이메일을 입력하세요." })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="비밀 번호"
          type="password"
          {...register("password", { required: "비밀번호를 입력하세요." })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <button
          className="w-full h-12 rounded-md bg-blue-500 text-white p-3 font-bold"
          type="submit"
          disabled={loading}
        >
          {loading ? "로딩 중" : "로그인"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
      <div className="flex items-center justify-between w-1/3 h-auto mt-5">
        <Image
          src="/google_logo.png"
          alt="구글 로그인"
          width={50}
          height={50}
          className="rounded-lg cursor-pointer"
        />
        <Image
          src="/github_logo.png"
          alt="깃허브 로그인"
          width={50}
          height={50}
          className="rounded-lg bg-white p-1 cursor-pointer"
        />
      </div>
      <Link href="/join">
        <span className="font-bold text-blue-300 text-xl flex gap-5 items-center mt-10">
          <GrFormNextLink className="scale-125" />
          아직 계정이 없다면?
        </span>
      </Link>
    </main>
  );
}
