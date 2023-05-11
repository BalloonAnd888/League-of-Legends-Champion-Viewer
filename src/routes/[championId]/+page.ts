export const load = ({ fetch, params}) => {

    const fetchChampion = async (id: any) => {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion/${id}.json`);
        const data = await response.json();
        return data
    }

    return {
        champion: fetchChampion(params.championId)
    }
}