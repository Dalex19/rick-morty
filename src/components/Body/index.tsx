import "./body.css"
import Card from "../../base-components/Card";
import useFetch from "../../hooks/useFetch";

function Main () {
    const {myCharacter} = useFetch();

    console.log(myCharacter);

   
    return (
      <div className="containerBody">
        {myCharacter.map(item => (
          <Card
            key={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            status={item.status}
            lastKnowLocation={item.lastKnowLocation}
            firstSeen={item.firstSeen}
          />
        ))}
      </div>
    );
};

export default Main;