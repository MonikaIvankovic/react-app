import check from "./../assets/icon-check.svg";

const FlexExe = () => {
  return (
    <>
      <div className="card card--one">
        <div>
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            alt="excerciseimg"
          />
          <span>text</span>
        </div>
        <div className="">
          <img className="card__icon" src={check} alt="checkicon" />
        </div>
      </div>
      <div className="card card--two">
        <div className="">
          <span>text</span>
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            alt="excerciseimg"
          />
        </div>
      </div>
      <div className="card card--three">
        <div className="">
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            alt="excerciseimg"
          />
          <span>text</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex--one">
          <h1>Title</h1>
          <span className="flex--one__item">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </span>
          <button>Text</button>
        </div>
        <div className="flex--two">
          <h1>Title</h1>
          <span className="flex--two__item">lorem ipsum lorem ipsum lorem</span>
          <button>Text</button>
        </div>
        <div className="flex--three">
          <h1>Title</h1>
          <span className="flex--three__item">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </span>
          <button>Text</button>
        </div>
      </div>
    </>
  );
};
export default FlexExe;
