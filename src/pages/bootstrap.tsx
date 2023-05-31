import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import Player1 from "../assets/player1";
import Player2 from "../assets/player2";
import Grass from "../assets/grass";
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
const Bootstrap = () => {
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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      alert("Kliknuo si me");
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <div className="container">
      <div className="bootstrap__header">
        <h1>Bootstrap Hello!</h1>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Click to load"}
        </Button>
      </div>
      <div className="bootstrap__main">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="dashboard" title="Dashboard">
            <div className="bootstrap__dashboard">
              <div className="bootstrap__dashboard__card">
                <div className="dashboard__item">
                  <div className="dashboard__item__number">45</div>
                  <div className="dashboard__item__text1">
                    <div className="dashboard__item__text">
                      Ovo je neki text
                    </div>{" "}
                    <br />
                    <span>koji nešto objašnjava</span>
                  </div>
                </div>
                <div className="dashboard__progressbar">
                  <ProgressBar now={60} />
                </div>
              </div>
              <div className="bootstrap__dashboard__card"></div>
            </div>
            <div className="bootstrap__dashboard__table">
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Height</th>
                    <th>Hobby</th>
                  </tr>
                </thead>
                <tbody>
                  {frontendRazred.map((student) => {
                    return (
                      <tr>
                        <td>{student.name}</td>
                        <td>{student.lastName}</td>
                        <td>{student.height + " " + "cm"}</td>
                        <td>{student.hobby}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="game" title="Game">
            <div className="game">
              <div className="game--one">
                <div className="game--one--player">
                  <Player1 />
                </div>
                <div className="game--one--grass">
                  <Grass />
                  <Grass />
                </div>
              </div>
            </div>
            <div className="game--two">
              <div>
                <Player2 />
              </div>
              <div>
                <Grass />
                <Grass />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Bootstrap;
