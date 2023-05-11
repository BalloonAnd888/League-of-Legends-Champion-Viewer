<script lang="ts">
    import '../app.css';

    export let data
    let championKeys = data["keys"]
</script>

<div class="background">
    <h1 class="title">Champion List</h1>

    <div class="list">
        {#each championKeys as key}
            <div class="container">
                <div class="card">
                    <a href="/{data.list[key].id}">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${data.list[key].image.full}`} alt="">
                        <div class="name">
                            <h4><b>{data.list[key].name}</b></h4>
                        </div>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .background {
        background-color: lightblue;
    }

    .card {
            margin-bottom: 14px;
            max-width: 120px;
            border-radius: 8px;
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            background-color: gray;
    }

    .container {
        padding-bottom: 10px;
    }

    .name {
        color: white;
        font-size: 20px;
        text-align: center;
        padding-bottom: 8px;
    }

    .title {
        text-align: center;
        padding: 20px 0px;
    }

    a {
        text-decoration: none;
    }

    @media screen and (min-width: 620px) {
        .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px 20px;
        }
    }

    @media screen and (min-width: 960px) {
        .list {
            padding: 0px 140px;
        }
    }

    @media screen and (min-width: 1200px) {
        .list {
            padding: 0px 210px;
        }
    }
</style>