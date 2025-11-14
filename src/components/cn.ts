import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...elements: ClassValue[]) {
  return twMerge(clsx(elements));
}
