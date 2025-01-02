import Image from "next/image";
import n_main from "../../../public/n_main.svg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col gap-16 h-screen">
      <Image
        src={n_main}
        alt="Loading"
        priority
        className="animate-ping w-32 h-32 fill-current text-blue-500"
      />
      Loading ...
    </div>
  );
}
