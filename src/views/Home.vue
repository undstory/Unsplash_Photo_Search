<template>
    <div class="title__container">
        <h1 class="title__header">Photos from unsplash.com</h1>
        <router-link to="/randomphotos" class="title__link"><button class="title__btn">Search random photo</button></router-link>
        <router-link to="/allphotos" class="title__link"><button class="title__btn">Search photos</button></router-link>
      
        <footer class="title__footer">
            <p>Design and code by undstory 2021. The photo comes from unsplash.com</p>
        </footer>
     
    </div>
</template>

<script>
export default {
    name: 'Home',
  }

</script>

<style lang="scss">

@import "../scss/_variable.scss";
@import "../scss/_mixins.scss";

    .title {
        &__container {
        background-image: url('../assets/background_unsplash.jpg');
        background-position: center center;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        position: relative;
        }

        &__header {
            font-family: $title_font;
            font-size: 6em;
            color: $gray;
            padding-top: 5rem;
        }

        &__btn {
            @include typicalBtn;
        }

        &__link {
            @include typicalLink;
        }

        &__footer {
            position: absolute;
            bottom: 0;
            left: 0; right: 0;
        }
    }

    @media all and (max-width: 650px) {
        .title {
            &__header { 
                font-size: 3.5em;
            }

            &__btn {
                margin: 2rem 1rem;
            }
        }
    }

</style>



