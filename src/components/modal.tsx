import { type ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClick: () => void;
};

export function Modal({ children, onClick }: ModalProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="absolute top-0 right-0 bottom-0 left-0 bg-blue-1/60 z-20"
      >
        {children}
      </div>
    </>
  );
}
