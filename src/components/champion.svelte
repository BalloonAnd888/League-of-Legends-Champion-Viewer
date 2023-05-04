<script>
    
    const getChampion = async () => {
        let response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json");
        let data = await response.json();


        //////
        //console.log(data)

        const list = data["data"]
        // console.log(list)

        // console.log(list["Aatrox"])

        const keys = Object.keys(list);
        console.log(keys)

        //for every key, get blurb from list
        // for(let key in keys) {
        //     console.log(list[keys[key]].blurb)
        //     console.log(key)
        // }

        //for each item in the dictionary
        //get the value for the key name


        // for(const [key, value] of Object.entries(list)) {
        //     console.log(key, value)
        // }
        
        //console.log(list["Aatrox"].blurb)

        return data;
    }

    // let champion = getChampion();
    // console.log(champion);

</script>

<div class="list">

    {#await getChampion()}
        <p>Loading....</p>
    {:then champ}
        <!-- {JSON.stringify(champ)} -->
        <!-- {#each champ as { name }}
            <p>{name}</p>
        {/each} -->
    {/await}

    <div class="container">
        <div class="card">
            <!-- <img src="img_avatar.png" alt="Avatar" style="width:100%"> -->
            <div class="name">
                <h4><b>Champion Name</b></h4>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <div class="name">
                <h4><b>Champion Name</b></h4>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <div class="name">
                <h4><b>Champion Name</b></h4>
            </div>
        </div>
    </div>

</div>



<!-- <div class="container">
    <div class="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%">
        <div class="name">
            <h4><b>Champion Name</b></h4>
        </div>
    </div>
</div> -->

<style>
    .card {
            margin-bottom: 14px;
            max-width: 300px;
            border-radius: 8px;
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            background-color: gray;
    }

    .container {
        display: flex; 
        justify-content: center;
    }

    .name {
        color: white;
    }

    .list {
        padding-left: 15px;
        padding-right: 15px;
    }

    @media screen and (min-width: 620px) {
        .card {
            margin: 0 25px 30px 25px;
            max-width: 400px;
        }

        .list {
            padding-top: 16px;
        }
    }

    @media screen and (min-width: 960px) {
        .card {
            max-width: 240px;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: row;
            padding-top: 25px;
        }
    }

    @media screen and (min-width: 1200px) {
        .card {
            max-width: 300px;
        }
    }
</style>
