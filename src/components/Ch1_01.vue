<template>
    <div>
        <button v-if="liked" v-on:click="offClickButton">❤️ Liked</button>
        <button v-else v-on:click="onClickButton">🤍 Like</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            liked: false,
        }
    },
    methods: {
        onClickButton() {
            this.liked = true;
        },
        offClickButton() {
            this.liked = false;
        },
    },
}
</script>