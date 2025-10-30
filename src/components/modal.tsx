import { useState, type ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export function Modal({ children }: ModalProps) {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-blue-1/60 z-20"
          onClick={() => {
            setShow(!show);
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
