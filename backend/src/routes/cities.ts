import { Router } from "express";

const citiesRouter = Router();

const COUNTRY = "US";
const TYPE = "CITY";
const MIN_POPULATION = 500000;
const LIMIT = 10;

citiesRouter.get("/", async (_, res) => {
  try {
    const response = await fetch(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities?countryIds=${COUNTRY}&types=${TYPE}&minPopulation=${MIN_POPULATION}&limit=${LIMIT}`
    ).then(res => res.json());
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching cities");
  }
});

export default citiesRouter;
