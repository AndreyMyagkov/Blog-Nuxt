<template>
    <section class="intro">
        <div class="container">
            <h2>{{ title }}</h2>
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            requred: true
        }
    },
   
}
</script>

<style lang="scss">
    .intro {
        width:100%;
        margin: 30px 0;
        text-align: center;
        background-color: #4b40e3;
        color:#fff;
    }
    h1 { 
        font-size: 26px;
    }
</style>