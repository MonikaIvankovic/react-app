const Vjezba2604 = () => {
  let arr = ["mama", "tata", "baka", "dida"];

  for (let i = 0; i < arr.length; i++) {}
  //if (arr[i] == "baka") {
  // break;
  //}
  // console.log(arr[i]);
  //if (arr[i] == "tata") {
  //delete arr[i];
  //}
  //}
  //arr.push("Monika");

  // console.log("Nas array je: ", arr);

  //Funkcije

  let ime;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        ime = arr[i];
        return ime;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };
  //Objekti
  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    godinaProizvodnje: 2005,
    marka: "Chevrolet",
    tip: "kalos",
    motor: "1.4 benzin",
    boja: "zuta",
    brojVrata: 5,
    prednjaVuca: "da",
    masa: "1150kg",
  };
  const recenica = `Ja imam unikatni ${car.marka} auto cija je boja: ${car.boja} ide kao metak jer mu je masa ${car.masa} a motor ${car.motor} i viki bivsa vlasnica`;
  const printValue = (key: string) => {
    return car[key];
  };

  //Zadatak

  const brojevi = [1, 5, 25, 3, 6, 8, 7, 36, 95, 8, 47];
  let maxNumber: number = brojevi[0];

  const greatestNumber = () => {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > maxNumber) {
        maxNumber[i];
      }
    }
  };

  return (
    <div className="container">
      <h1>Nizovi</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Monika")}</div>
      <div>{recenica}</div>
      <h5>Json:</h5>
      <pre>{JSON.stringify(car, null, 2)}</pre>
      <div>{printValue("marka")}</div>
    </div>
  );
};

export default Vjezba2604;
