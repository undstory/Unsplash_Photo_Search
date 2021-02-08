<template>
  <div id="app">

   // <div id="nav">
    //   <router-link to="/">Home</router-link> |
    //   <router-link to="/about">About</router-link>
    //    <router-link to="/other">Other</router-link>
    // </div>
    <router-view/>
    <h1>Random "{{ query }}" Unsplash Photo</h1>
    <input
     
      v-model="query"
      type="text"
      label="search term"
    />
    <button  type="button" @click.prevent="searchPhoto">
      Search
    </button>
    <br />
    <ul>
      <li v-for="image in images" :key="image.id">
        <img  :src="image.urls.small" @click="apply(image)"/> 
        <span>Autor: {{ image.user.name.toUpperCase() }}</span>
    
      </li>
    </ul>
    <br />
    <div class="ramka" :style="background" ></div>
  </div>
</template>

<script>
import unsplash_settings from "@/unsplash_settings.js";
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
    query: "",

    // unsplashData: null,
    images: [],
    image_url: null,
    download_url: null
  }
  },
  computed: {
    imageUrl() {
      if (this.images) return this.images.urls.small;
      return null;
    },
    
 background() {

        let style = {

        }
      if(this.image_url) {
        style.background = `no-repeat center center url(${this.image_url})`
       
      } else {
        style.background = `#cee2b5`;
      }

      return style;
    }
  },
  methods: {
    searchPhoto() {

      this.fetchImages()
        .then((response) => {
          this.images = response.data.results;
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
          per_page: 3
        }
      })
    },
    apply(image) {
      this.image_url = image.urls.regular;
      this.download_url = image.links.download;
      console.log(this.image_url);
    this.background()
    },

      

  
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.ramka {
  border: 1px solid red;
  width: 50%;
  height: 100vh;
}
</style>