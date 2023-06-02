import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import Player1 from "../assets/player1";
import Player2 from "../assets/player2";
import Grass from "../assets/grass";
import Finish1 from "../assets/finish1";
import Finish2 from "../assets/finish2";
import { frontendRazred } from "../data/table-data";
type GenderType = "male" | "female";

export type StudentType = {
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

  const handlePress = (e: React.KeyboardEvent) => {
    if (e.code === "Space") {
      console.log("pomakni prvog");
    }
    if (e.code === "Numpad0") {
      console.log("pomakni drugog");
    }
  };

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
            <div tabIndex={0} onKeyDown={(e) => handlePress(e)}>
              <div className="game">
                <div className="game--one">
                  Player 1
                  <br />
                  <div className="game--one__player">
                    <Player1 />
                  </div>
                  <div className="game--one__grass">
                    <Grass />
                    <Grass />
                  </div>
                  <div className="game--one__finish1">
                    <Finish1 />
                  </div>
                  <div className="game--one__finish2">
                    <Finish2 />
                  </div>
                </div>
              </div>
              <div className="game--two">
                Player 2
                <br />
                <div className="game--two__player">
                  <Player2 />
                </div>
                <div className="game--two__grass">
                  <Grass />
                  <Grass />
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Bootstrap;
