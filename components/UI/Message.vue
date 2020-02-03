<template>
    <div class="message" :class="mesClass">
        <p>{{  message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        mesClass: {
            type: String,
            default: 'success'
        },
        message: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang='scss'>
    .message {
        font-size: 22px;
        &.success p{
            color:#26de81;
        }
        &.error p{
            color:#fc5c65;
        }
    }
</style>