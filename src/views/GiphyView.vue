<template>
    <div class="row opening">
        <div class="container-fluid">
            <h1 class="text-center">Search the Giphy api!</h1>
            <p class="text-center">Enter in the input field and get the top results</p>
        </div>
    </div>
    <div class="row">
        <form @submit="searchGiphy">
            <div class="container-fluid">
                    <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 mBottom">
                        <div class="input-group">
                        <input type="text" placeholder="Giphy Search" aria-label="search giphy" id="giphySearch" class="form-control" v-model="search"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary" type="submit" :class="{disabled: !search.length}">Serch</button>
                            </div>
                        </div>
                    </div>

            </div>
        </form>
    </div>
    <div class="row">
        <div class="container-fluid">
            <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 mBottom">
                <div class="col text-center">
                    <button @click.prevent="getTrending" type="button" class="btn btn-outline-dark">Just See what is trending</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row" v-if="gifs != null">
        <div class="container-fluid" >
            <div  class="col-md-4 col-sm-12 imageContaienr" v-for="gif in gifs" :key="gif.id">
                <img :src="gif.images.downsized_medium.url" :alt="gif.title" class="giphyImage col-sm-12"/>
            </div>
        </div>
    </div>
    <div class="row" v-else-if="trending != null">
        <div class="container-fluid" >
            <div  class="col-md-4 col-sm-12 imageContaienr" v-for="trend in trending" :key="trend.id">
                <img :src="trend.images.downsized_medium.url" :alt="trend.title" class="giphyImage col-sm-12"/>
            </div>
        </div>
    </div>
    <div class="row" v-else>
        <div class="container-fluid">
            <p class="text-center">Please search for gifs</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GiphyView',
    data() {
        return {
            gifs: null,
            isEmpty: true,
            trending: null,
            search: '',
            api_key: '1y8OWeeIgyFDz5HTOIhVmA5VrP1A09KS'
        }
    },
    methods: {
        async searchGiphy() {
            this.trending = null;  
            const url = `https://api.giphy.com/v1/gifs/search?q=${this.search}&api_key=${this.api_key}&limit=20`
            try {
                const response = await axios.get(url);
                this.gifs = response.data.data;
            } catch(err) {
                console.error('err',err);
                return;
            }         
        },
        async getTrending() {
            this.gifs = null;
            const url = `https://api.giphy.com/v1/gifs/trending?api_key=${this.api_key}&limit=20`;
            try {
                const res = await axios.get(url);
                this.trending = res.data.data;
            } catch(err) {
                console.log('err',err);
                return
            }
        },        
    }
}

</script>

<style scoped>
.giphyImage {
    width: 100%;
    height: 250px;   
    margin-bottom: 12px;
}
.imageContaienr {
    margin: 0 !important;
    display: inline-block;
}
.opening {
    margin-top: 40px;
}
.disabled {
    cursor: not-allowed;
}

.mBottom {
    margin-bottom: 24px;
}

@media screen and (max-width: 800px) {
    .imageContaienr {
        display: block;
        padding-right: 0;
     }
}
</style>