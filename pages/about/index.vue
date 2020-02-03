<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section class="about">
          <div class="container">
                <h1 class="title">About my blog:</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dignissimos. Impedit quae repudiandae eos ex esse repellendus. Illum, illo assumenda! Laboriosam perferendis velit pariatur nobis earum iure vitae ex amet minus, beatae laudantium. Maxime illum minus sit dolorum, distinctio neque atque reprehenderit, quia nobis tempore iste, eius amet modi culpa!</p>

               
                <Intro title="Lorem, ipsum dolor sit amet" />
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dignissimos. Impedit quae repudiandae eos ex esse repellendus. Illum, illo assumenda! Laboriosam perferendis velit pariatur nobis earum iure vitae ex amet minus, beatae laudantium. Maxime illum minus sit dolorum, distinctio neque atque reprehenderit, quia nobis tempore iste, eius amet modi culpa!</p>

                <img src="@/assets/img/about.jpg" alt="">
               

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dignissimos. Impedit quae repudiandae eos ex esse repellendus. Illum, illo assumenda! Laboriosam perferendis velit pariatur nobis earum iure vitae ex amet minus, beatae laudantium. Maxime illum minus sit dolorum, distinctio neque atque reprehenderit, quia nobis tempore iste, eius amet modi culpa!</p>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  head () {
    let title = "About My SSR Blog!",
        descr = "About My SSR Blog! With Nuxt.js!",
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
  }    
}
</script>

<style lang="scss">
    .about {
        text-align: center
    }
    p {
        margin-bottom: 10px;
    }
</style>