export const load = async ({fetch}) => {

    let response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json");
    let data = await response.json();

    const list = data["data"];

    const keys = Object.keys(list);

    return {
        list,
        keys
    }
}
