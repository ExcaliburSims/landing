import "./Section-formation.css";
import Card from "./Card-formation";
import Startop from "./assets/svg/startop.svg";
import Starbottom from "./assets/svg/starbottom.svg";

const Section = () => {
  return (
    <div className="section">
      <img src={Startop} alt="stars" className="stars-top" />
      <div className="container h-100 d-flex flex-column justify-content-around h-25">
        <div>
          <h2 className="text-center title">Qu'allez-vous apprendre ?</h2>
          <p className="text-center subtitle">
            Si vous êtes novice en matière de codage, nous vous recommandons de
            commencer par le début.
          </p>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center h-75">
          <Card />
          <Card />
        </div>
      </div>
      <img src={Starbottom} alt="stars" className="stars-bottom" />
    </div>
  );
};

export default Section;
