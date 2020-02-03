<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My lasts posts: "/>
    <!-- posts  -->
    <PostsList :posts="postLoaded"/>
    <contacts />
  </div>

</template>

<script>

import promo from '@/components/Promo.vue'


import contacts from '@/components/Сontacts.vue'
export default {
  components: {
    promo,
    contacts
  },
  head () {
    let title = "My SSR Blog!",
        descr = "My SSR Blog! With Nuxt.js!",
        type = "site"
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title},
        { hid: 'description', name: 'description', content: descr},
        { hid: 'og:description', name: 'og:description', content: descr},
        { hid: 'og:type', name: 'og:type', content: type}
      ]
    }
  },
  computed: {
    postLoaded() {
      return this.$store.getters.getPostLoaded
    }
  },
  data(){
    return {
       
    }
  }
}
</script>


