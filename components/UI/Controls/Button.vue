<template>
    <button
        class="btn"
        :class="btnClass"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        btnClass: {
            type: String,
            default: 'btnPrimary'
        }
    }
}
</script>
