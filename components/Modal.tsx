"use client";
import Image from "next/image";
import { useRef, ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";
const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if ((e.target === overlay.current) && handleDismiss) handleDismiss();
  }, [handleDismiss, overlay]);

  return (
    <div className="modal" ref={overlay} onClick={handleClick}>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute top-4 right-8"
      >
        <Image src="/close.svg" width={17} height={17} alt="close" />
      </button>

      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
