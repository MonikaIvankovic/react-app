import { useEffect, useState } from "react";
import { json } from "react-router-dom";
type PokemonType = {
  name: string;
  id: number;
  color: string;
};
type BerryType = {
  name: string;
  url: string;
};
const Pokemons = () => {
  const [data, setData] = useState<PokemonType>();
  const [dataById, setDataById] = useState<PokemonType[]>([]);
  const [dataByColor, setDataByColor] = useState<PokemonType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [berries, setBerries] = useState<BerryType[]>([]);

  const findPokemons = (pokemonName: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };
  const getPokemonsById = (id: number) => {
    fetch(`https://pokeapi.co/api/v2/ability/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataById(jsonData);
      })
      .catch((error) => console.error(error));
  };
  const getPokemonsByColor = (id: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon-color/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByColor(jsonData);
      })
      .catch((error) => console.error(error));
  };
  const getBerries = () => {
    fetch(`https://pokeapi.co/api/v2/berry`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);

        setBerries(data.results);
      })
      .catch((error) => console.error(error));
  };
  const getCapitalCity = () => {
    fetch(`https://restcountries.com/`)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getPokemonsById(1);
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <h1>Pokemons</h1>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={() => findPokemons(searchValue)}>Search</button>
      <div>
        {data ? (
          <div>{data.name}</div>
        ) : (
          <div>Nema niti jedan pokemon za zadani parametar</div>
        )}
      </div>

      <h1>ById</h1>
      {
        <div>
          {dataByColor.map((pokemons: PokemonType) => {
            return <div key={pokemons.id}>{pokemons.name}</div>;
          })}
        </div>
      }
      {/* <h1>All berries</h1>
      <div>
        {berries.map((berry) => {
          return (
              <div>
                  <div>{berry.name}</div>;
                  <a href={berry.url}>Link</a>
              </div>
              
          )
          
        })}
      </div> */}
    </div>
  );
};

export default Pokemons;
