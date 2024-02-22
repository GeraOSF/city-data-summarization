import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 3000;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCities(): Promise<City[]> {
  try {
    return await fetch(`http://localhost:${SERVER_PORT}/cities`).then((res) =>
      res.json(),
    );
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching cities.");
  }
}
