import { useEffect } from "react";
const Vjezba0305 = () => {
  let position = 0;
  let reverse = false;
  const box = document.getElementsByClassName("box")[0] as HTMLDivElement;

  box.style.backgroundColor = "yellow"; // IT WORKS
  box.classList.add("box--size");

  useEffect(() => {
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }
      const currentPosition = position + "px";

      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box.style.marginLeft = currentPosition;
    };
    setInterval(frame, 200);
  }, []);

  const handClick = (e: MouseEvent) => {};
  return (
    <div className="container">
      <h1>Vježba 0305</h1>
      <hr />
      <div className="box"></div>
      <button onClick={(e) => handClick()}></button>
    </div>
  );
};

export default Vjezba0305;
