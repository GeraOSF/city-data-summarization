import CityCard from "./components/CityCard";
import PopulationChart from "./components/PopulationChart";
import { getCities } from "@/lib/utils";
import { useQuery } from "react-query";

function App() {
  const { data: cities } = useQuery("cities", getCities);

  return (
    <main className="p-1">
      <h1 className="text-3xl text-center font-black my-4">
        City Data Summarization 🏙️
      </h1>
      <section className="container flex flex-col gap-2 items-center">
        <div className="hidden sm:block w-full lg:w-2/3">
          <PopulationChart cities={cities || []} />
        </div>
        {cities?.map((city) => <CityCard key={city.id} city={city} />)}
      </section>
    </main>
  );
}

export default App;
