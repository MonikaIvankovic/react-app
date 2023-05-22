import button from "./../assets/button.svg";
import lion from "./../assets/lion.svg";
const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__header__icon" src={lion} alt="" />
        <div>
          <h1>GAMEWEEK 17</h1>
          <h3>Premier League</h3>
        </div>
      </div>
      <div className="card__main">
        <div>
          <h3>Winning prize</h3>
          <h1>Signed BVB Jersey</h1>
        </div>

        <div className="card__main__icon">
          <div>14</div>
          <div>Daysyss</div>
        </div>
      </div>
      <hr />
      <div className="card__footer">
        <div>
          <h3>Game points</h3>
          <h1>10000</h1>
        </div>
        <div>
          <h3>Game entries</h3>
          <h1>144523</h1>
        </div>
        <div>
          <h3>Reminder</h3>
          <div className="card__button">
            <div className="card__button--green">
              <div className="card__button--white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
