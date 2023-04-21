import { CharacterInfo } from "../../service/getcharacter";
import "./card.css";



function Main ({ imgSrc, name, status, lastKnowLocation, firstSeen} : CharacterInfo) {
    return(
        <div className="cardContainer">
          <img src={imgSrc} className="imgAvatar"/>
          <div className="containerInfo">
            <div className="containerDetails">
              <h1 className="containerDetailsTitle">{name}</h1>
              <h3 className={status == "Alive" ? "containerDetailsStatusLive" : "containerDetailsStatusDead"}>{status}</h3>
            </div>
            <div className="containerDetails">
              <p>Last known location: <br/> {lastKnowLocation} </p>
            </div>
            <div className="containerDetails">
              <p>First seen in: <br/> {firstSeen}</p>
            </div>
          </div>
        </div>
    );
};

export default Main;