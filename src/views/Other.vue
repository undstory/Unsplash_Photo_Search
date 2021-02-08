<template>
  <div id="app">
    <h1>My Unsplash Photo</h1>
  
  
    <br />
   
    <button @click="searchPhoto">Search</button>
    <ul>
        <li v-for="image in images" :key="image.id">
           <img :src="image.id"/>
        </li>
    </ul> 
    <br />

  </div>
</template>

<script>
import unsplash_settings from "@/unsplash_settings.js";
import axios from 'axios'

export default {
  name: 'other',
  data() {
    return {
 
    username: 'ashbot',
  
    images: [],
    unsplashData: null
  }
  },
  computed: {
  
 
  },
  methods: {
    searchPhoto() {

      this.fetchImages()
        .then((response) => {
          this.unsplashData = response.data;
         console.log(this.unsplashData);
        })
    },

    fetchImages() {
      return axios({
        method: 'get',
        url: 'https://api.unsplash.com/users/:username/likes',
        params: {
            client_id: unsplash_settings.api_key,
            username: 'webaliser',
       
    
          page: 1,
         
        }
      })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
