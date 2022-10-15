<template>
<li class="post">
    <div>
        <div> {{ post.id }} </div>
        <div> <b>Name:</b> {{ post.title }} </div>
        <div> <b>Description:</b> {{ post.body }} </div>
    </div>

    <div class="post__btns">

        <primary-button
            type="button"
            @click="$router.push(`/posts/${post.id}_${post.title}_${post.body}`)"
        >
            Open
        </primary-button>

        <primary-button
            type="button"
            @click="removePost(post.id)"
        >
            Delete
        </primary-button>

    </div>
</li>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        removePost(id) {
            this.$emit('remove', id)
        },
    }
}
</script>

<style lang="scss">

$primary: #42b983;

.post {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 2rem;
    flex-grow: 1;

    padding: .5rem 1rem;
    border: 3.5px solid $primary;

    & + & {
        margin-top: 10px;
    }

    &__btns {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        gap: .3rem;
    }
}
</style>