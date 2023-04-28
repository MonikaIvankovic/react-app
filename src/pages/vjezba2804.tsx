type GenderType = "male" | "female";

type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Vjezba2804 = () => {
  const frontendRazred: StudentType[] = [
    {
      name: "Ivan",
      lastName: "Sakoman",
      age: 29,
      gender: "male",
      height: 183,
      hobby: "Cycling",
      employed: true,
      favoriteColor: "red",
    },
    {
      name: "Goran",
      lastName: "Viljanac",
      age: 19,
      gender: "male",
      height: 185,
      hobby: "Musician",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Katharina",
      lastName: "Zlosa",
      age: 27,
      gender: "female",
      height: 180,
      hobby: "reading",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Antun",
      lastName: "Glumac",
      age: 22,
      gender: "male",
      height: 185,
      hobby: "Football",
      employed: false,
      favoriteColor: "Red",
    },
    {
      name: "Nikolina",
      lastName: "Kirčanski",
      age: 40,
      gender: "female",
      height: 164,
      hobby: "Martial arts",
      employed: true,
      favoriteColor: "black",
    },
    {
      name: "Robert",
      lastName: "Đujić",
      age: 24,
      gender: "male",
      height: 182,
      hobby: "Books, movies, games",
      employed: false,
      favoriteColor: "silver",
    },
    {
      name: "Monika",
      lastName: "Ivankovic",
      age: 23,
      gender: "female",
      height: 164,
      hobby: "roller skating",
      employed: true,
      favoriteColor: "grey",
    },
    {
      name: "Maja",
      lastName: "Juratovac",
      age: 32,
      gender: "female",
      height: 169,
      hobby: "dancing",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivan",
      lastName: "Puljić",
      age: 25,
      gender: "male",
      height: 175,
      hobby: "running",
      employed: false,
      favoriteColor: "blue",
    },
    {
      name: "Sara",
      lastName: "Cindric",
      age: 24,
      gender: "female",
      height: 161,
      hobby: "writing",
      employed: false,
      favoriteColor: "black",
    },
    {
      name: "Kristian",
      lastName: "Radoš",
      age: 30,
      gender: "male",
      height: 188,
      hobby: "Netflix",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivana",
      lastName: "Arbutina",
      age: 42,
      gender: "female",
      height: 166,
      hobby: "slikanje",
      employed: false,
      favoriteColor: "red",
    },
  ];
  const min = Math.min(...frontendRazred.map((person) => person.age));
  const minValues = frontendRazred.filter((person) => person.age == min);

  console.log(minValues);
  const letter = frontendRazred.filter((firstLetter) =>
    firstLetter.name.startsWith("M")
  );
  console.log(letter);
  const letterLast = frontendRazred.filter((LastLetter) =>
    LastLetter.lastName.endsWith("c" || "Ć")
  );
  console.log(letterLast);

  //const heightStudents=()=>{
  for (let i = 0; i < frontendRazred.length; i++) {
    if (frontendRazred[i].favoriteColor == "red") {
      console.log(frontendRazred[i]);
    }
  }
  for (let i = 0; i < frontendRazred.length; i++) {
    if (frontendRazred[i].height > 160 && frontendRazred[i].height < 180) {
      console.log(frontendRazred[i]);
    }
  }
  //}
  return (
    <div className="container">
      <h1>Vjezba 2804</h1>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hobby</th>
              <th>favoriteColor</th>
            </tr>
          </thead>
          <tbody>
            {frontendRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.hobby}</td>
                  <td>{student.favoriteColor}</td>
                </tr>
              );
            })}
            <tr>
              <td>Ivan</td>
              <td>Cycling</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
        <div>
          <ul>
            <li>Ime </li>
            <li>Prezime</li>
            <li>Godine</li>
          </ul>
          {frontendRazred.map((student) => {
            return (
              <ul>
                <li>{student.name}</li>
                <li>{student.lastName}</li>
                <li>{student.age}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vjezba2804;
