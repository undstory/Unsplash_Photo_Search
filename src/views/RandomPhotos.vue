<template>
  <div class="random">
    <h2 class="random__title">If you want to limit your choice, just say what you are looking for...</h2>
    <b-form-input class="random__input"
      size="lg"
      v-model="query"
      type="text"
      label="search term" autofocus>
    </b-form-input>
    <button  type="button" @click.prevent="searchPhoto">
      Search
    </button>
    <br />
   

     <img  :src="imageUrl"/> 
    <br />

  </div>
</template>

<script>
import unsplash_settings from "@/unsplash_settings.js";
import axios from 'axios'

export default {
  name: 'random-photos',
  data() {
    return {
    query: "",
    username: 'osoinez',
    unsplashData: null,
    images: [],
   
  }
  },
  computed: {
    imageUrl() {
      if (this.unsplashData) return this.unsplashData.urls.regular;
      return null;
    },
 
  },
  methods: {
    searchPhoto() {

      this.fetchImages()
        .then((response) => {
          this.unsplashData = response.data;
        })
    },

    fetchImages() {
      return axios({
        method: 'get',
        url: 'https://api.unsplash.com/photos/random',
        params: {
          client_id: unsplash_settings.api_key,
        
          query: this.query,
          featured: true,
          page: 1,
         
        }
      })
    }
  }
};
</script>

<style lang="scss">

@import "../scss/_variable.scss";

.random {
  &__title {
    font-family: $title_font;
    color: $gray;
    margin: 2rem;
    font-size: 3em;

    &__input {
      width: 50%;
    } 
  }
}


</style>