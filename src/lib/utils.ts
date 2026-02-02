import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalPage(total: number, rowPerPage: number) {
  return Math.max(1, Math.ceil(total / rowPerPage));
}
