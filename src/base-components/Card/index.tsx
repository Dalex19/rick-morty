import { CharacterInfo } from "../../service/getcharacter";
import "./card.css";



function Main ({ imgSrc, name, status, specie,lastKnowLocation, firstSeen} : CharacterInfo) {
    return(
        <div className="cardContainer">
          <img src={imgSrc} className="imgAvatar"/>
          <div className="containerInfo">
            <div className="containerDetails">
              <h1 className="containerDetailsTitle">{name}</h1>
              <h3 className={status == "Alive" ? "containerDetailsStatusLive" : "containerDetailsStatusDead"}>
                {status} <span>{specie}</span>
              </h3>
            </div>
            <div className="containerDetails">
              <p className="textGray">Last known location: </p>
              <span>{lastKnowLocation}</span>
            </div>
            <div className="containerDetails">
              <p className="textGray">First seen in: </p>
              <span>{firstSeen}</span>
            </div>
          </div>
        </div>
    );
};

export default Main;