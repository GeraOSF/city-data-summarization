type GeoDBResponse = {
  links: Link[];
  data: City[];
  metadata: Metadata;
};

type City = {
  id: number;
  wikiDataId: string;
  city: string;
  country: string;
  countryCode: string;
  name: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
};

type Link = {
  rel: string;
  href: string;
};

type Metadata = {
  currentOffset: number;
  totalCount: number;
};
