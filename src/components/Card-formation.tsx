import "./Card-formation.css";
import LaptopIcon from "./assets/svg/laptop.svg";
import PlayIcon from "./assets/svg/play.svg";

const Card = () => {
  return (
    <div className="overlay">
      <div className="square ">
        <div className="d-flex align-items-end flex-column card-content">
          <div className="icon-container">
            <img src={LaptopIcon} alt="Laptop icon" className="card-icon" />
          </div>
          <div>
            <h2 className=" card-title">Responsive Web Design</h2>
            <p className="mt-4 card-text">
              Dans cette formation, vous apprendrez les langages que les
              développeurs utilisent pour créer des pages Web : HTML (Hypertext
              Markup Language) pour le contenu, et CSS (Cascading Style Sheets)
              pour la conception. Enfin, vous apprendrez à créer des pages Web
              adaptées à différentes tailles d'écran en créant
            </p>
          </div>
        </div>
        <div className="text-end pt-5 link-container">
          <span className="card-link pe-3">Suivre le cours</span>
          <img src={PlayIcon} alt="Laptop icon" className="play" />
        </div>
      </div>
    </div>
  );
};

export default Card;
