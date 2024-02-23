import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CityCard({ city }: { city: City }) {
  return (
    <Card className="sm:flex justify-between">
      <div>
        <CardHeader className="justify-center">
          <CardTitle>{city.name}</CardTitle>
          <CardDescription>
            {city.region}, {city.country}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Population:{" "}
            <span className="text-foreground font-semibold">
              {new Intl.NumberFormat().format(city.population)}
            </span>
          </p>
          <p className="text-muted-foreground">
            Latitude:{" "}
            <span className="text-foreground font-semibold">
              {city.latitude.toFixed(2)}
            </span>
          </p>
          <p className="text-muted-foreground">
            Longitude:{" "}
            <span className="text-foreground font-semibold">
              {city.longitude.toFixed(2)}
            </span>
          </p>
        </CardContent>
      </div>
      <CardFooter className="flex justify-start sm:justify-end sm:pt-6">
        <Link
          to={`/city/${city.id}`}
          className={buttonVariants({ className: "gap-1 group" })}
        >
          Go to details{" "}
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
}
