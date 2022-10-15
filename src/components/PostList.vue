<template>
    <div v-if="posts.length">
        <h3>Users list</h3>
        <transition-group name="post-list">
            <post-item 
                class="post"
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post.id)"
            />
        </transition-group>
    </div>
    <h3
        v-else 
        class="red"
    >
        There are no posts yet
    </h3>
</template>

<script>
    import PostItem from '@/components/PostItem';

    export default {
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-leave-to {
  opacity: 0;
  translate: 100px;
}

.post-list-enter-from {
    opacity: 0;
    translate: 0 30px;
}
</style>