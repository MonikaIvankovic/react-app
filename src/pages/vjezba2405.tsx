import React, { useEffect, useState } from "react";
type RollerType = {
  id: number;
  name: string;
  img: string;
  about: string;
};

const Vjezba2405 = () => {
  const [activeRoller, setActiveRoller] = useState<RollerType | null>(null);
  const data: RollerType[] = [
    {
      id: 1,
      name: "Fitness role",
      img: "https://cdn.itaksport.com/29096-medium_default/powerslide-swell-lite-black-100-fitnes-roleri-senior.jpg",
      about:
        "pogodno za početnice pa sve do srednje naprednih, lagane udobne role, čvrsto područje oko zapešća drži nogu u stabilnom položaju, ograničava znojenje, maksimalna veličina kotačića je 84 mm",
    },
    {
      id: 2,
      name: "Brzo rolanje",
      img: "https://itaksport.hr/img/c/151-small_default.jpg",
      about:
        "Kako bi brzo rolanje bilo pristupačnije. Lagane i funkcionalne, savršene za početnike, za treniranje i sudjelovanje u prvim utrkama.",
    },
    {
      id: 3,
      name: "Freeskate role",
      img: "https://cdn.itaksport.com/25166-large_default/powerslide-imperial-basic-80-freeskate-role-senior.jpg",
      about:
        "Za avanture u gradu ili na stazama. Kombinacija za najbolje performanse.",
    },
    {
      id: 4,
      name: "Nordijske role",
      img: "https://itaksport.hr/img/c/489-small_default.jpg",
      about:
        " Kotači punjeni zrakom što bi trebalo olakšati prolazak i po najneravnijim terenima. Ove role takođe omogućuju klasične pokrete nordijskog skijanja.",
    },
    {
      id: 5,
      name: "Dječje role",
      img: "https://www.fitnesshop.hr/wp-content/uploads/2021/12/1056_image.jpg",
      about: "Ove role idealne su za motoričke vještine i ravnotežu djeteta",
    },
  ];
  const getActiveRoller = (id: number) => {
    data.forEach((value) => {
      if (value.id === id) {
        setActiveRoller(value);
      }
    });
  };
  return (
    <div className="container">
      <h1>Vrste rola</h1>
      <hr />
      <div className="cardroller">
        {data.map((roller) => {
          return (
            <div className="cardroller__item">
              <div className="cardroller--name">{roller.name}</div>
              <div>
                <img
                  onClick={() => getActiveRoller(roller.id)}
                  className="cardroller__image"
                  src={roller.img}
                  alt="roller image"
                />
                <button
                  className="cardroller__button"
                  onClick={() => getActiveRoller(roller.id)}
                >
                  Show data
                </button>

                <div>{activeRoller.about}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vjezba2405;
