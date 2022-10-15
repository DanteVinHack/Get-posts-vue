<script>
    export default {
        data() {
            return {
                placeholderTitle: 'Title',
                placeholderBody: 'Body',
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost(event) {
                this.post.id = Date.now();

                this.$emit('create', this.post)

                this.post = {
                    title: '',
                    body: ''
                }
            }
        }
    }
</script>

<template>
    <form class="form" @submit.prevent="createPost">
        <h3>Create Post</h3>
        <form-input 
            :placeholder="placeholderTitle"
            v-model.trim="post.title"
            v-focus
        />
        <form-input
            :placeholder="placeholderBody"
            v-model.trim="post.body"
        />

        <div class="btn-wrapper">

            <primary-button 
                type="submit"
            >
                Create
            </primary-button> 

            <primary-button 
                type="button"
                @click="post.title=''; post.body=''"
            >
                Clear
            </primary-button>
            
        </div>
    </form>
</template>

<style lang="scss">

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>