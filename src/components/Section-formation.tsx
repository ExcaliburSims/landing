import "./Section-formation.css";
import Card from "./Card-formation";
import Startop from "./assets/svg/startop.svg";
import Starbottom from "./assets/svg/starbottom.svg";

const Section = () => {
  return (
    <div className="section">
      <img src={Startop} alt="stars" className="stars-top" />
      <div className="container h-100 d-flex flex-column justify-content-around">
        <div>
          <h2 className="text-center title">Qu'allez-vous apprendre ?</h2>
          <p className="text-center subtitle">
            Si vous êtes novice en matière de codage, nous vous recommandons de
            commencer par le début.
          </p>
        </div>
        <div className="h-75 card-container">
          <Card />
          <Card />
        </div>
      </div>
      <img src={Starbottom} alt="stars" className="stars-bottom" />
    </div>
  );
};

export default Section;
