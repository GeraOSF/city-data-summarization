import { Router } from "express";
import {
  GEODB_BASE_URL,
  COUNTRY,
  MIN_POPULATION,
  LIMIT,
  RADIUS,
} from "@/constants";

const citiesRouter = Router();

citiesRouter.get("/", async (_, res) => {
  try {
    const response = await fetch(
      `${GEODB_BASE_URL}/cities?countryIds=${COUNTRY}&types=CITY&minPopulation=${MIN_POPULATION}&limit=${LIMIT}`
    ).then(res => res.json());
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching cities");
  }
});

citiesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).send("Invalid city id.");
  }

  try {
    // Get city details
    const { data: cityData } = await fetch(`
      ${GEODB_BASE_URL}/cities/${id}
    `).then(res => res.json());

    // Get nearby cities
    const { data: nearbyCities } = await fetch(`
      ${GEODB_BASE_URL}/cities/${id}/nearbyCities?types=CITY&radius=${RADIUS}
    `).then(res => res.json());

    const cityDetails = { ...cityData, nearbyCities };
    res.send(cityDetails);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching details of city with id: " + id);
  }
});

export default citiesRouter;
