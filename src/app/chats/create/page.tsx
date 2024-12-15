export default function CreatePage() {
  return(
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/4 h-screen bg-black" />
      <form className="w-1/2 h-screen bg-blue-300 flex flex-col gap-5 p-5 font-bold">
        <input className="w-full h-auto p-3 px-5 rounded-full text-black outline-none"
          placeholder="방 제목"
        />
        <input className="w-full h-auto p-3 px-5 rounded-full text-black outline-none bg-white" 
          placeholder="토론 주제"
        />
        <textarea className="w-full h-full p-3 px-5 rounded-md text-black outline-none"
          placeholder="토론 할 내용에 대한 간략한 부가 설명을 작성해주세요."
        />
        <div className="w-full h-full flex items-end justify-center gap-20">
          <button className="w-32 h-12 rounded-full bg-red-500 text-white p-3 font-bold">
            취소
          </button>
          <button className="w-32 h-12 rounded-full bg-blue-500 text-white p-3 font-bold"
            type="submit"
          >
            생성하기
          </button>
        </div>
      </form>
      <div className="w-1/4 h-screen bg-black" />
    </main>
  )
}