import CityCard from "@/components/CityCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Spinner } from "@/components/ui/spinner";
import { getCityDetails } from "@/lib/utils";
import {
  UsersRoundIcon,
  GlobeIcon,
  MountainSnowIcon,
  RadiusIcon,
  SparklesIcon,
} from "lucide-react";
import { useQuery } from "react-query";
import { useParams, Navigate } from "react-router-dom";

export default function City() {
  const { id } = useParams();
  const { data: city } = useQuery(["city", id], () => getCityDetails(id));
  if (!id || isNaN(Number(id))) return <Navigate to="/" />;

  if (!city) {
    return (
      <div className="flex justify-center items-center w-full mt-12">
        <Spinner />
      </div>
    );
  }
  return (
    <main className="container flex flex-col gap-1 items-center">
      <h1 className="font-semibold text-3xl mt-2">{city.name}</h1>
      <h2 className="text-lg text-muted-foreground">
        {city.region}, {city.country}
      </h2>
      <section>
        <p className="text-muted-foreground flex gap-2 align-center">
          <UsersRoundIcon />
          <span>Population: </span>
          <span className="text-foreground font-semibold">
            {new Intl.NumberFormat().format(city.population)}
          </span>
        </p>
        <p className="text-muted-foreground flex gap-2 align-center">
          <GlobeIcon />
          <span>Latitude: </span>
          <span className="text-foreground font-semibold">
            {city.latitude.toFixed(2)}
          </span>
          <span>Longitude: </span>
          <span className="text-foreground font-semibold">
            {city.longitude.toFixed(2)}
          </span>
        </p>
        <p className="text-muted-foreground flex gap-2 align-center">
          <MountainSnowIcon />
          <span>Elevation: </span>
          <span className="text-foreground font-semibold">
            {city.elevationMeters} meters
          </span>
        </p>
      </section>
      {city.nearbyCities.length > 0 && (
        <>
          <h2 className="text-2xl mt-8 font-semibold text-balance flex gap-1 items-center">
            <RadiusIcon className="text-muted-foreground" />
            100 Mile Radius Nearby Cities
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent>
              {city.nearbyCities.map((city) => (
                <CarouselItem key={city.id} className="lg:basis-1/2">
                  <CityCard city={city} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
      <section className="text-center flex flex-col gap-2">
        <h2 className="text-2xl mt-8 font-semibold text-balance">AI Summary</h2>
        <Button className="gap-2">
          <SparklesIcon />
          <span>Generate City Summary</span>
        </Button>
      </section>
    </main>
  );
}
