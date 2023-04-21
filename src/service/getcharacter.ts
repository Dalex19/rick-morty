export interface CharacterInfo {
    id?: number;
    imgSrc: string;
    name: string;
    status: string;
    lastKnowLocation: string;
    firstSeen: string
  }

export const getItems = async (characterId: number): Promise<CharacterInfo | null>  => {
  try {
    const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    const characterData = await characterResponse.json();

    const locationResponse = await fetch(characterData.location.url);
    const locationData = await locationResponse.json();

    const episodeResponse = await fetch(characterData.episode[0]);
    const episodeData = await episodeResponse.json();

    return {
        id: characterData.id,
        name: characterData.name,
        imgSrc: characterData.image,
        status: characterData.status,
        lastKnowLocation: locationData.name,
        firstSeen:  episodeData.name
    }

  } catch (error) {
    console.log(error);
    return null;
}
};
