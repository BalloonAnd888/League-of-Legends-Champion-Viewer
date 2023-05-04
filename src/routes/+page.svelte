<script>
    import '../app.css';
    //console.log("Champion List Page");

    export let data
    let championKeys = data["keys"]
</script>

<div class="background list">
    <h1>Champion List</h1>

    {#each championKeys as key}
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${data.list[key].image.full}`} alt="">
        <h3>{data.list[key].name}</h3>
    {/each}

    <!-- <p>{JSON.stringify(data)}</p> -->

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
    .background {
        background-color: lightblue;
    }

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

        .container {
            display: block;
        }

        .list {
            display: block;
        }
    }
</style>


