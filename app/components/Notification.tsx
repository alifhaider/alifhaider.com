import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export function Notification() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="text-bg animate-all fixed bottom-10 left-1/2 z-50 mx-auto -translate-x-1/2 cursor-pointer py-2 text-background md:px-6 md:py-4">
      <div className="w-full space-y-4 rounded-md bg-[#00224d] p-4 lg:max-w-[480px] dark:bg-[#f3eeea]">
        <div className="flex items-center justify-end gap-10">
          <div>
            <p className="text-background">Star this repo on </p>
            <a
              href="https://github.com/alifhaider/alifhaider.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined text-sm font-semibold italic text-primary"
            >
              @github.com/alifhaider/alifhaider.com
            </a>
          </div>
          <button onClick={() => setIsOpen(false)} className="">
            <IoMdCloseCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
