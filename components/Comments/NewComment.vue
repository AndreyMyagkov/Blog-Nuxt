<template>
    <section class="new-comment">
        <div class="container">
            
                <!-- message  -->
                <Message v-if="message" :message="message"/>

                <form @submit.prevent="onSubmit" class="contact-form">

                    <!-- name  -->
                    <AppInput v-model="comment.name">Name:</AppInput>

                    <!-- textarea  -->
                    <AppTextArea v-model="comment.text">Text:</AppTextArea>

                    <!-- buttons  -->
                    <div class="controls">
                        <AppButton class="btn btnPrimary">Submit!</AppButton>
                    </div>
                </form>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            message:null, 
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('addComent', {
                postId: this.postId,
                publish: false,
                ...this.comment
            })
            .then(()=>{
                this.message = 'Submited';
                // Reset
                this.comment.name = '';
                this.comment.text = '';
            }).catch(e=> console.log(e))
        }
    }
}
</script>

<style lang="scss">
.new-comment {
    text-align: center;
    .title {
       
    }

    .contact-form {
        max-width: 600px;
        margin: 30px auto;
    }
    .controls {
        margin: 30px 0;
    }
}

</style>