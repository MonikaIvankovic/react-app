import { useEffect, useState } from "react";
type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};
const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [dataSearch, setSearch] = useState<BreweryType[]>([]);
  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };
  const getBreweryByCity = (city: string) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=10`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
      })
      .catch((error) => console.error(error));
  };
  const searchBrewieries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries/search?query=river")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearch(jsonData);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getBreweries();
    getBreweryByCity("london");
    searchBrewieries();
  }, []);
  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>ByCity</h1>
      <div>
        {dataByCity.map((brewery: BreweryType) => {
          return <div key={brewery.id}>{brewery.name}</div>;
        })}
      </div>
      <h1>Search</h1>
      <div>
        {dataSearch.map((brewery: BreweryType) => {
          return <div key={brewery.id}>{brewery.name}</div>;
        })}
      </div>
    </div>
  );
};
export default Breweries;
