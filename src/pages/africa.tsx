import React, { useEffect, useState } from "react";
type CountryNameType = {
  common: string;
  official: string;
};
type MapsType = {
  googleMaps: string;
};
type CarType = {
  side: string;
  signs: string[];
};
export type CountryType = {
  name: CountryNameType;
  maps: MapsType;
  population: number;
  borders: string[];
  car: CarType;
  area: number;
  capital: string[];
};
const Africa = () => {
  const [africaData, setAfricaData] = useState<CountryType[]>([]);

  const getAfricaData = () => {
    //uzimanje podataka sa servera
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => res.json())
      .then((data) => {
        //ispisivanje posataka u konzolu
        console.log(data);
        setAfricaData(data);
      })
      //ispisivanje errora u slucaju da nesto ne valja
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAfricaData();
  }, []);
  return (
    <div className="container">
      <h1>Africa</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Map</th>
            <th>Population</th>
            <th>Borders</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {africaData.map((country: CountryType) => {
            return (
              <tr key={country.area}>
                <td>{country.name.common}</td>
                <td>
                  <a href={country.maps.googleMaps}>{country.name.common}</a>
                </td>
                <td>{country.population}</td>
                <td> {country.borders + "  "}</td>
                <td>{country.car.signs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Africa;
