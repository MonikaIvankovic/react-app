import { useEffect, useState } from "react";
type CountryNameType = {
  common: string;
  official: string;
  currencies: CurrenciesType;
};
type CurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};
type FlagsType = {
  png: string;
  svg: string;
};
type CountryType = {
  name: CountryNameType;
  flags: FlagsType;
  currencies: CurrenciesType;
  capital: string[];
};

const Europe = () => {
  const [data, setData] = useState<CountryType>();
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [flags, setFlags] = useState<FlagsType[]>([]);
  const [currencies, setCurrencies] = useState<CurrenciesType[]>([]);
  const [name, setCountriesNames] = useState<CountryNameType[]>([]);

  const getEuropeCountries = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  const getEuropeCountriesName = () => {
    fetch(`https://restcountries.com/v3.1/name/{name}?fullText=true`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getEuropeCountries();
    getEuropeCountriesName();
  }, []);
  return (
    <div className="container">
      {" "}
      {countries.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Flag</th>
              <th>Currency</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((countries: CountryType) => {
              return (
                <tr>
                  <td>{countries.name}</td>
                  <td>{countries.flags}</td>
                  <td>{countries.currencies}</td>
                  <td>{countries.capital}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Europe;
