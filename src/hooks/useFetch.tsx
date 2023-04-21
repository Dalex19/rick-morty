import { getItems } from "../service/getcharacter";
import { useState, useEffect } from "react";
import { CharacterInfo } from "../service/getcharacter";

function useFetch () {
    const [myCharacter, setMyCharacters] = useState<CharacterInfo[]>([]);
    
    const getItemNow = async () => {
      const randomNumbers = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 100 + 1)
      );
      const promises = randomNumbers.map((number) => getItems(number));
      const results = await Promise.all(promises);

      const filteredResults = results.filter(
        (item): item is CharacterInfo => item !== null
      );

      setMyCharacters(filteredResults);
    };

    useEffect(() => {
        getItemNow();
    }, [])

    return {myCharacter};
    
}

export default useFetch;