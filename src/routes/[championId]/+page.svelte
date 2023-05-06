<script>
    export let data;
    const { champion } = data;
    console.log(champion);
    const championName = Object.keys(champion.data);
</script>

<h1>{champion.data[championName].name}</h1>
<p style = "text-transform:capitalize;">{champion.data[championName].title}</p>
<p>{champion.data[championName].lore}</p>
<img src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${champion.data[championName].image.full}`} alt="">

<p>{champion.data[championName].passive.description}</p>
<p>{champion.data[championName].passive.name}</p>

<p>{champion.data[championName].spells[0].name}</p>
<p>{champion.data[championName].spells[0].description}</p>


<button><a href="/">Back to Home</a></button>