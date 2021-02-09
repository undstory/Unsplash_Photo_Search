<template>
    <div class="title__container">
        <h1 class="title__header">Photos from unsplash.com</h1>
        <button class="title__btn"><router-link to="/randomphotos" class="title__link">Search random photo</router-link></button>
        <button class="title__btn"><router-link to="/allphotos" class="title__link">Search photos</router-link></button>
      
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
            background-color: transparent;
            border: 3px solid $gray;
            min-width: 15rem;
            padding: 1rem 0;
            font-family: $text_font;
            font-size: 1.2em;
            font-weight: bold;
            color: $gray;
            text-transform: lowercase;
            margin: 4rem 2rem;
            transition: .5s ease;

            &:hover {
                background-color: #BFBFBF;
            }
        }

        &__link {
            color: $gray;
            text-decoration: none;

            &:hover {
                color: inherit;
                text-decoration: none;
            }
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



