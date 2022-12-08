import "./Card-formation.css";
import PlayIcon from "./assets/svg/play.svg";

const Card = (props: any) => {
  const linked = false;
  return (
    <div className="overlay">
      <div className="square ">
        <div className="d-flex align-items-end flex-column card-content">
          <div className="icon-container">
            <img src={props.icon} alt="Laptop icon" className="card-icon" />
          </div>
          <div>
            <h2 className=" card-title">{props.title}</h2>
            <p className="mt-4 card-text">{props.paragraph}</p>
          </div>
        </div>
        <div className="text-end pt-5 link-container">
          {linked !== false ? (
            <>
              <span className="card-link pe-3">Suivre le cours</span>
              <img src={PlayIcon} alt="Laptop icon" className="play" />
            </>
          ) : (
            <span className="text-muted card-link">Bientôt disponible</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
