import "./Section-formation.css";
import Card from "./Card-formation";
import Startop from "./assets/svg/startop.svg";
import Starbottom from "./assets/svg/starbottom.svg";
import LaptopIcon from "./assets/svg/laptop.svg";
import AlgoIcon from "./assets/svg/algorithmIcon.svg";

const title1 = "Responsive Web Design";
const title2 = "JavaScript Algorithms and Data Structures";
const paragraph1 =
  "Dans cette formation, vous apprendrez les langages que les développeurs utilisent pour créer des pages Web : HTML (Hypertext Markup Language) pour le contenu, et CSS (Cascading Style Sheets) pour la conception. Enfin, vous apprendrez à créer des pages Web adaptées à différentes tailles d'écran en créant";
const paragraph2 =
  "Alors que HTML et CSS contrôlent le contenu et le style d'une page, JavaScript est utilisé pour la rendre interactive. Dans le cadre de la certification JavaScript Algorithm and Data Structures, vous apprendrez les principes fondamentaux de JavaScript, etc.";

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
          <Card icon={LaptopIcon} title={title1} paragraph={paragraph1} />
          <Card icon={AlgoIcon} title={title2} paragraph={paragraph2} />
        </div>
      </div>
      <img src={Starbottom} alt="stars" className="stars-bottom" />
    </div>
  );
};

export default Section;
