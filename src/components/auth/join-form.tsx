"use client"

import Image from "next/image";
import Link from "next/link";

//libs
import { auth } from "@/libs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GrFormNextLink } from "react-icons/gr";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Join() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setError(null);

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(credentials.user, {
        displayName: data.name,
      });

      router.push("/login");
      
    } catch (error: any) {
      if(error instanceof FirebaseError){
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // password와 confirmPassword 비교
  const password = watch("password");

  return(
    <main className="w-full h-screen flex items-center justify-center flex-col">
      <form 
        className="flex flex-col gap-5 w-1/3 h-1/2 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-2xl font-bold italic">Join N</span>
        <input
          className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="닉네임"
          {...register("name", {
            required: "닉네임을 입력해주세요.",
            maxLength: {
              value: 6,
              message: "닉네임은 최대 6글자입니다.",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        {/* Email Input */}
        <input
          className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="E-mail"
          type="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "올바른 이메일 형식을 입력해주세요.",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="비밀번호"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
            pattern: {
              value: /^(?=.*[!@#$%^&*])/,
              message: "특수기호를 하나 이상 포함해야 합니다.",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {/* Confirm Password Input */}
        <input
          className="w-full h-12 rounded-md bg-white text-black p-3"
          placeholder="비밀번호 확인"
          type="password"
          {...register("confirmPassword", {
            required: "비밀번호 확인을 입력해주세요.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}

        <button className="w-full h-12 rounded-md bg-blue-500 text-white p-3 font-bold"
          type="submit"
          disabled={loading}
        >
          {loading ? "로딩 중" : "회원 가입"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
      <div className="flex mt-10 items-center justify-between w-1/3 h-auto">
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
      <Link href="/login">
        <span className="font-bold text-blue-300 text-xl flex gap-5 items-center mt-10">
          <GrFormNextLink className="scale-125" />
          이미 계정이 있나요?
        </span>
      </Link>
    </main>
  )
}