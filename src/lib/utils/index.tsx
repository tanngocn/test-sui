import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const localizedNumber = (
  amount: number,
  locale = "en-US",
  options?: Intl.NumberFormatOptions,
) => {
  return new Intl.NumberFormat(locale, options).format(amount);
};