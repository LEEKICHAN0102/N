export default function Login() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <form className="flex flex-col gap-5 w-1/3 h-1/2 items-center justify-center">
        <span className="text-2xl font-bold italic">Login N</span>
          <input className="w-full h-12 rounded-md bg-white text-black p-3"
            placeholder="E-mail"
            type="email"
          />
          <input className="w-full h-12 rounded-md bg-white text-black p-3"
            placeholder="비밀 번호"
            type="password"
          />
          <button className="w-full h-12 rounded-md bg-blue-500 text-white p-3 font-bold"
            type="submit"
          >
            로그인
          </button>
      </form>
    </main>
  )
}