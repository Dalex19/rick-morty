import { getItems } from "../service/getcharacter";
import { useState, useEffect } from "react";
import { CharacterInfo } from "../service/getcharacter";

function useFetch () {
    const [myCharacter, setMyCharacters] = useState<CharacterInfo[]>([]);
    
    const getItemNow = async() => {
        const promises = Array.from({ length: 5 }, (_, i) => getItems(i + 1));
        const results = await Promise.all(promises);
      
        const filteredResults = results.filter((item): item is CharacterInfo => item !== null);
      
        setMyCharacters(filteredResults);
    }

    useEffect(() => {
        getItemNow();
    }, [])

    return {myCharacter};
    
}

export default useFetch;