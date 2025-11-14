// import { type ReactNode } from "react";
// import { cn } from "./cn";

// type ModalProps = {
//   children: ReactNode;
//   onClick: () => void;
//   className?: string;
// };

// export function Modal({ children, onClick, className }: ModalProps) {
//   return (
//     <div
//       onClick={onClick}
//       className={cn("fixed inset-0 bg-blue-1/60 z-50", className)}
//     >
//       {children}
//     </div>
//   );
// }

import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "./cn";

type ModalProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

export function Modal({ children, onClick, className }: ModalProps) {
  return createPortal(
    <div
      onClick={onClick}
      className={cn("fixed inset-0 bg-blue-1/60 z-50", className)}
    >
      {children}
    </div>,
    document.body
  );
}
