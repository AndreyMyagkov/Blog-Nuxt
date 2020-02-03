<template>
    <!-- posts  -->
    <PostsList :admin="true" :posts="postLoaded"/>

</template>


<script>



export default {
    layout: 'admin',
    mounted (){
      this.$store.dispatch('nuxtServerInit')
    },
    computed: {
      postLoaded() {
        return this.$store.getters.getPostLoaded
      }
    }
}
</script>
