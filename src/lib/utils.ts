import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isHex(num: string) {
  return Boolean(num.match(/^0x[0-9a-f]+$/i)) && num.length === 24;
}

export function splitTags(value: string) {
  var str_array = value.split(/\s*,\s*/)

  return str_array

  
}


export function parseISOString(s: any) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}