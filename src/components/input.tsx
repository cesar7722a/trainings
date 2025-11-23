// import type { ReactNode } from "react";
// import { cn } from "./cn";
// import { Controller, type Control, type FieldValues } from "react-hook-form";

// type InputProps<T extends FieldValues> = {
//   name: string;
//   type?: string;
//   placeholder?: string;
//   className?: string;
//   control: Control<T>;
//   children: ReactNode;
// };

// export function InputInput<T extends FieldValues>({
//   className,
//   name,
//   placeholder,
//   type,
//   children,
//   control,
// }: InputProps<T>) {
//   return (
//     <div className="flex flex-col space-y- w-96 space-y-1">
//       {children}
//       <Controller
//         render={({ field }) => (
//           <input
//             type={type}
//             placeholder={placeholder}
//             className={cn(
//               `h-9 px-2 outline-none border-2 rounded-md border-gray-6 focus:border-blue-8`,
//               className
//             )}
//             {...field}
//           />
//         )}
//         name={name}
//         control={control}
//         defaultValue=""
//       />
//     </div>
//   );
// }

// export function Label({
//   children,
//   className,
// }: {
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <label htmlFor="" className={cn("", className)}>
//       {children}
//     </label>
//   );
// }

import type { ReactNode, InputHTMLAttributes } from "react";
import { cn } from "./cn";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  className?: string;
  control: Control<T>;
  defaultValue?: PathValue<T, Path<T>>;
  id?: string;
};

export function Input<T extends FieldValues>({
  className,
  name,
  placeholder,
  type = "text",
  control,
  label,
  defaultValue,
  id,
}: InputProps<T>) {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col w-96 space-y-1">
      {label && (
        <Label className={cn("text-sm font-medium")} htmlFor={inputId}>
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            id={inputId}
            type={type}
            placeholder={placeholder}
            className={cn(
              "h-9 px-2 outline-none border-2 rounded-md border-gray-6 focus:border-blue-8",
              className
            )}
            {...field}
          />
        )}
      />
    </div>
  );
}

export function Label({
  children,
  className,
  htmlFor,
}: {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={cn("text-sm font-medium", className)}>
      {children}
    </label>
  );
}
