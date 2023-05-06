export const load = ({ fetch, params}) => {
    //console.log(params)
    
    const fetchChampion = async (id: any) => {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/champion/${id}.json`);
        const data = await response.json();
        return data
    }

    return {
        champion: fetchChampion(params.championId)
    }
}