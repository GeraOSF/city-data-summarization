import { getCities } from "@/lib/utils";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    async function fetchCities() {
      const cities = await getCities();
      setCities(cities);
    }
    fetchCities();
  }, []);

  return (
    <main>
      <pre>{JSON.stringify(cities, null, 2)}</pre>
    </main>
  );
}

export default App;
