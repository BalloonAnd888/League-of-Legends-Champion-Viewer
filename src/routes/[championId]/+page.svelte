<script>
    export let data;
    const { champion } = data;
    console.log(champion);
    const championName = Object.keys(champion.data);

    const ability = ["Q", "W", "E", "R"];
    // console.log(ability)
</script>

<div class="intro">
    <div class="introContainer">
        <h1 class="champName">{champion.data[championName].name}</h1> 
    
        <p class="champTitle">{champion.data[championName].title}</p>
    </div>

    <div class="champSplashContainer">
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`} class="champSplash" alt="ChampSplashImage">
    </div>

    <div class="champLoreContainer">
        <p>{champion.data[championName].lore}</p>
    </div>
</div>

<div class="abilities">
    <div class="abilityTitle">
        <h2>Abilities</h2>
    </div>
    <div class="passiveContainer">
        <div class="passive">
            <h4 class="passiveName">Passive: {champion.data[championName].passive.name} </h4>
            <p class="passiveDescription"> {champion.data[championName].passive.description}</p>    
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/passive/${champion.data[championName].passive.image.full}`} alt="passive">
        </div>
    </div>
</div>

<div class="spells">
    {#each champion.data[championName].spells as spell, index}
        <div class="spellContainer">
            <h4 class="spellName">{ability[index]}: {spell.name}</h4>
            <p class="spellDescription">{spell.description}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/spell/${spell.image.full}`} alt="ChampionSpellImage">
        </div>
    {/each}
</div>

<div class="skins">
    <div class="skinTitle">
        <h2>Skins</h2>
    </div>
    {#each champion.data[championName].skins as skin, index}
        <div class="skinContainer">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${index}.jpg`} alt="ChampionSkinsImage" class="champSkin">
            <h4 class="skinName">{skin.name}</h4>
        </div>
    {/each}
</div>

<div class="buttonContainer">
    <a href="/" class="button">Back to Champion Select</a>
</div>


<style>
    .champName {
        text-align: center;
    }

    .champTitle {
        text-transform: capitalize;
        text-align: center;
    }

    .introContainer {
        padding: 20px 0px;
    }

    .champSplash {
        max-width: 250px;
    }

    .champSplashContainer {
        text-align: center;
        padding-bottom: 10px;
    }

    .champLoreContainer {
        padding: 0px 20px 10px 20px;
    }

    /* .abilities {
        
    } */
    
    .abilityTitle {
        text-align: center;
        text-decoration: underline;
        padding-bottom: 10px;
    }

    .passive {
        text-align: center;
        padding: 0px 20px;
    }
    .passiveName {
        padding-bottom: 5px;
    }

    .passiveDescription {
        padding-bottom: 5px;
    }

    .spells {
        padding: 20px 10px;
    }

    .spellContainer {
        text-align: center;
        padding: 10px 15px;
    }
    
    .spellName {
        padding-bottom: 5px;
    }

    .spellDescription {
        padding-bottom: 5px;
    }

    .skinTitle {
        text-align: center;
        text-decoration: underline;
        padding-bottom: 10px;
    }

    .champSkin {
        max-width: 250px;
    }

    .skinContainer {
        text-align: center;
        padding-bottom: 10px;
    }

    .buttonContainer {
        padding: 20px;
    }

    .button {
        display: block;
        color: black;
        font-weight: bold;
        background-color: #babcc9;
        padding: 19px 0;
        height: 64px;
        max-width: 250px;
        text-align: center;
        margin: auto;
        border-radius: 30px;
    }

    .button:hover {
        background-color: #E3EDF2;
    }

    a {
        text-decoration: none;
    }

    @media screen and (min-width: 620px) {

    }

    @media screen and (min-width: 960px) {

    }

    @media screen and (min-width: 1200px) {

    }

</style>

