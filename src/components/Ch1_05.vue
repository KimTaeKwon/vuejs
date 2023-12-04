<template>
    <div>
        <div>{{word}}</div>
        <form v-on:submit="onSubmitForm">
            <input type="text" v-model="value" ref="answer">
            <button type="submit">입력</button>
        </form>
        <div>{{result}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            word: '제로초',
            result: '',
            value: '',
        }
    },
    methods: {
        onSubmitForm(e){
            e.preventDefault();
            if (this.word[this.word.length-1] === this.value[0]) {
                this.result = '딩동댕';
                this.word = this.value;
                this.value = '';
                this.$refs.answer.focus();
            } else {
                this.result = '땡';
                this.value = '';
                this.$refs.answer.focus();
            }
        }
    },
}
</script>