import type { ReactNode } from "react";
import { cn } from "./cn";

type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  children: ReactNode;
};

export function Input({
  className,
  name,
  placeholder,
  type,
  children,
}: InputProps) {
  return (
    <div className="flex flex-col space-y- w-96 space-y-1">
      {children}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          `h-9 px-2 outline-none border-2 rounded-md border-gray-6 focus:border-blue-8`,
          className
        )}
      />
    </div>
  );
}

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <label htmlFor="" className={cn("", className)}>
      {children}
    </label>
  );
}
