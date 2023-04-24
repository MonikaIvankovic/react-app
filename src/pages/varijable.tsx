import { useState } from "react";
type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: string;
  guitars: {
    prva: string;
    druga: string;
    treca: string;
  };
};
const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  const fruit: string = "jabuka";
  let colorFruit: "crvena" | "zelena" | "zuta" | undefined;
  let edable: boolean = true;
  const calorie: number = 52;
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferrari" | undefined;
  colorFruit = "zelena";
  //obje vrijednosti moraju biti true kako bi program usao u stament
  if (pi & number) {
  }
  //samo jedna od varijabli treba biti true
  if (pi | number) {
  }
  color = "green";

  const obj: UserType = {
    name: "Monika",
    lastName: "Ivankovic",
    age: 22,
    height: "164cm",
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treca: "Shechter",
    },
  };

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };
  return (
    <div>
      <h1>Varijable vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi + 5}</h4>
        <h4>Vrijednost color varijable je: {color + "blue"}</h4>
        <h4>Vrijednost car varijable je: {car}</h4>
      </div>
      <div>
        <h4>Vrijednost naseg statea je: {value}</h4>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr />
      <div>Rezultat nase funkcije je {addOnOurValue(5, 6)}</div>
      <hr />
      <div>
        <h4>Vrijednosti naseg objekta su</h4>
        {obj.name} {obj.lastName}
      </div>
      <div>Godine:{obj.age}</div>
      <div>Visina:{obj.height}</div>
      <div>
        Gitare:{obj.guitars.prva},{obj.guitars.druga},{obj.guitars.treca}
      </div>
      <div>
        <table>
          <tr>
            <th>Ime voća:</th>
            <th>Kalorijska vrijednost:</th>
            <th>Boja voća:</th>
            <th>Jestivost voća:</th>
          </tr>
          <tr>
            <td>{fruit}</td>
            <td>{calorie}cal</td>
            <td>{colorFruit}</td>
            <td>{edable ? "da" : "ne"}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Varijable;
