<template>
  <div class="random">
    <router-link class="random__arrow" to="/"><span class="fas fa-arrow-circle-left"></span></router-link>
    <h2 class="random__title">If you want to limit your choice, just say what you are looking for</h2>
    <input class="random__input" 
      v-model="query"
      type="text"
      placeholder="city"
      @keyup.enter="searchPhoto"
      autofocus />
    <button type="button" class="random__btn" @click.prevent="searchPhoto">
      Search
    </button>
    <br />
    <div v-if="unsplashData" class="random__box">
     
      <b-card
        :header="getAuthor"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        align="center"
        :footer="getLikes"
        footer-tag="footer"
        footer-bg-variant="dark"
        footer-text-variant="white"
       >
      <b-card-img :src="imageUrl"></b-card-img>
      <button class="random__download"><a class="random__link" :href="getDownload" target="_blank">Download</a></button>
      </b-card>

    </div>
    <span v-else></span>
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
    download_url: null,
  }
  },
  computed: {
    imageUrl() {
      if (this.unsplashData) return this.unsplashData.urls.small;
      return null;
    },

    getAuthor() {
      if(this.unsplashData) return `Author: ${this.unsplashData.user.name}`;
    return null;
    },

    getLikes() {
       if(this.unsplashData) return `Likes: ${this.unsplashData.likes} 
        Downloads: ${this.unsplashData.downloads}`;
    return null;
    },

    getDownload() {
       if(this.unsplashData) return this.unsplashData.links.download;
    return null
    }
 
  },
  methods: {
    searchPhoto() {
      this.fetchImages()
        .then((response) => {
          this.unsplashData = response.data;
          this.query = "";
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
    },

  }
};
</script>

<style lang="scss">

@import "../scss/_variable.scss";
@import "../scss/_mixins.scss";

.random {
  position: relative;

   &__arrow {
    position: absolute;
    top: -2rem; 
    right: 0;
    
    span {
      @include typicalLink;
      color: $gray;
      font-size: 2em;
    }
  }

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

    &::placeholder {
      color: lighten($gray, 50%);
    }
  } 

  &__btn {
    @include typicalBtn;
    min-width: 10rem;
    margin: 1rem 1rem 2rem;
    padding: .5rem;
  }

  &__download {
    @include typicalBtn;
    margin: 1rem;
    padding: .5rem .2rem;
  }

  &__link {
    @include typicalLink;
  }

  &__box {
    width: 50%;
    margin: 0 auto;
    font-family: $text_font;
    font-size: .9em;
  }
}

@media all and (max-width: 960px) {
  .random {
    &__box {
      width: 70%;
    }
  }
}

@media all and (max-width: 575px) {
  .random {
    &__box {
      width: 80%;
    }

    &__title {
      font-size: 2em;
    }

    &__download {
      min-width: 10rem;
    }

    &__input {
      width: 15rem;
    }
  }
}


</style>