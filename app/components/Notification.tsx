import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export function Notification() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="text-bg animate-all fixed bottom-10 right-2 z-50 mx-auto cursor-pointer px-4 py-2 text-background md:right-5 md:px-6 md:py-4">
      <div className="w-full space-y-4 rounded-md bg-[#ffffff] p-4 md:max-w-96">
        <div className="flex items-start justify-end">
          <p>
            Give this repository a star on{" "}
            <a
              href="https://github.com/alifhaider/alifhaider.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined italic text-primary"
            >
              @github.com/alifhaider.com
            </a>
          </p>
          <button onClick={() => setIsOpen(false)} className="">
            <IoMdCloseCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
