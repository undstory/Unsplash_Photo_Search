<template>
  <div class="photo">
    <div v-if="image" class="photo__box">     
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
      <b-card-img :src="image.urls.small" class="photo__img"></b-card-img>
        <button class="random__download"><a class="random__link" :href="getDownload" target="_blank">Download</a></button>
      </b-card>
    </div>
    <span v-else></span>
  </div>
</template>

<script>
export default {
    name: 'photo',
    props: {
        image: {
            type: Object,
            required: true
        } 
    },
    computed: {
        getAuthor() {
            if(this.image) return `Author: ${this.image.user.name}`;
            return null;
        },

        getLikes() {
            if(this.image) return `Likes: ${this.image.likes}`;
            return null;
        },

        getDownload() {
            if(this.image) return this.image.links.download;
            return null;
        }
    }
}
</script>


<style scoped lang="scss">
@import "../scss/_variable.scss";
@import "../scss/_mixins.scss";

.photo {
   flex: 1 1 290px;
   margin: 0 1rem 1rem;

   &__box {
    width: 100%;
    margin: 0 auto;
    font-family: $text_font;
    font-size: .9em;
  }

  &__img {
    height: 25rem;
    object-fit: cover;
  }
}
</style>
