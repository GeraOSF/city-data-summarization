import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 3000;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCities(): Promise<City[]> {
  try {
    const response: GeoDBResponse = await fetch(
      `http://localhost:${SERVER_PORT}/cities`,
    ).then((res) => res.json());
    const { data: cities } = response;
    return cities;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching cities.");
  }
}

export async function getCityDetails(
  id: string | undefined,
): Promise<CityDetails> {
  if (!id || isNaN(Number(id))) {
    throw new Error("Invalid city id.");
  }
  try {
    return await fetch(`http://localhost:${SERVER_PORT}/cities/${id}`).then(
      (res) => res.json(),
    );
  } catch (error) {
    console.error(error);
    throw new Error(
      `An error occurred while fetching details of city with id: ${id}`,
    );
  }
}
