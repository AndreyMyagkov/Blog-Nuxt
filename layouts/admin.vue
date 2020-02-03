<template>
  <no-ssr>
    <div class="wrapper">
      <Header />

      <div class="wrapper-content wrapper-content--fixed">
          <Intro title="Admin Page">
              <nuxt-link class="link linkWhite" to="/admin">Admin </nuxt-link>
              <nuxt-link class="link linkWhite" to="/admin/new-post">New Post </nuxt-link>
              <nuxt-link class="link linkWhite" to="/admin/comments">Comments </nuxt-link>
              <span @click="logoutUser" class="link linkWhite">LogOut </span>
          </Intro>
          <nuxt />
      </div>
    </div>
  </no-ssr>
</template>


<script>
import Header from '@/components/system/Header.vue'
export default {
  components: {Header},
  middleware: ['auth-check', 'auth'],

  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
      .then(()=>this.$router.push('/admin/auth'))
    }
  }
}
</script>