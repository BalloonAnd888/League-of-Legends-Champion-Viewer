<script>
    export let data;
    const { champion } = data;
    console.log(champion);
    const championName = Object.keys(champion.data);
</script>

<h1>{champion.data[championName].name}</h1> 

<p style = "text-transform:capitalize;"> <b>Title:</b> {champion.data[championName].title}</p>
<p> <b>Lore:</b> {champion.data[championName].lore}</p>
<img src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${champion.data[championName].image.full}`} alt="">

<p> <b>Passive:</b> {champion.data[championName].passive.name} </p>
<p> {champion.data[championName].passive.description}</p>
    
<p> <b>Q:</b> {champion.data[championName].spells[0].name}</p>
<p>{champion.data[championName].spells[0].description}</p>

<p> <b>W:</b> {champion.data[championName].spells[1].name}</p>
<p>{champion.data[championName].spells[1].description}</p>

<p> <b>E:</b> {champion.data[championName].spells[2].name}</p>
<p>{champion.data[championName].spells[2].description}</p>

<p> <b>R:</b> {champion.data[championName].spells[3].name}</p>
<p>{champion.data[championName].spells[3].description}</p>



<button><a href="/">Back to Home</a></button>

