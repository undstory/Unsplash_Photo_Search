<template>
    <div class="all">
        <router-link class="all__arrow" to="/"><span class="fas fa-arrow-circle-left"></span></router-link>
        <h2 class="random__title">Tell me what you want to see</h2>
        <input class="random__input" 
            v-model="query"
            type="text"
            @keyup.enter.prevent="searchPhoto"
            placeholder="cat"
            autofocus />
        <button type="button" class="random__btn" @click.prevent="searchPhoto">Search</button>
        <ul class="all__photos">
            <Photo v-for="image in images" :key="image.id" :image="image" />                   
        </ul>
    </div>
</template>

<script>
import unsplash_settings from "@/unsplash_settings.js";
import axios from 'axios';
import Photo from '../components/Photo.vue'

export default {
    name: 'all-photos',
    components: {
        Photo
    },
    data() {
        return {
            query: "",
            images: [],
            image_url: null,
            download_url: null
        }
    },
   
    methods: {
        searchPhoto() {
            this.fetchImages()
            .then((response) => {
            this.images = response.data.results;
            this.query = "";
            })  
        },

        fetchImages() {
            return axios({
                method: 'get',
                url: 'https://api.unsplash.com/search/photos',
                params: {
                    client_id: unsplash_settings.api_key,
                    query: this.query,
                    page: 1,
                    per_page: 15
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import "../scss/_variable.scss";
@import "../scss/_mixins.scss";

.all {
    position: relative;

    &__arrow {
        position: absolute;
        top: -2rem; 
        right: 0;
    
        span    {
            @include typicalLink;
            color: $gray;
            font-size: 2em;
        }
    }

    &__photos {
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        margin: 0 auto;
        padding: 0;
    }
}
</style>