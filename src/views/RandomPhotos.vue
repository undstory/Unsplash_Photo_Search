<template>
  <div class="random">
    <h2 class="random__title">If you want to limit your choice, just say what you are looking for... or not</h2>
    <input class="random__input" 
      v-model="query"
      type="text"
      placeholder="city i.e."
      autofocus />
    <button type="button" class="random__btn" @click.prevent="searchPhoto">
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
    unsplashData: null,
    images: [],
  }
  },
  computed: {
    imageUrl() {
      if (this.unsplashData) return this.unsplashData.urls.small;
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
@import "../scss/_mixins.scss";

.random {
  &__title {
    font-family: $title_font;
    color: $gray;
    margin: 2rem;
    font-size: 2.5em;
  }

  &__input {
    border: none;
    border-bottom: 3px solid $gray;
    width: 20rem;
    padding: 0 1rem .5rem;
    font-size: 1.2em;
    font-weight: bold;

    &:focus {
      outline: none;
    }
  } 

  &__btn {
    @include typicalBtn;
    min-width: 10rem;
    margin: 1rem 1rem 2rem;
    padding: .5rem;
  }
}


</style>