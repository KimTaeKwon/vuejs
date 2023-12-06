<template>
    <div class="ball" :style="styleObject"> {{number}} </div>
</template>

<script>
export default {
    name : "LottoBall",
    props : {
        number : Number,
    },
    computed: { // 기존 값을 수정, 도출 할때 computed 사용
        styleObject(){
            let background;
            if (this.number <= 10) {
                background = '#f2b720';
            } else if(this.number <= 20) {
                background = '#4072ac';
            } else if(this.number <= 30) {
                background = '#de4c0e';
            } else if(this.number <= 40) {
                background = '#9195a4';
            } else {
                background = '#13be4b';
            }
            return {
                background,
            }
        }
    },
}
</script>

<style scoped>
.ball {display: inline-block; width: 40px; height: 40px; border-radius: 20px; line-height: 40px; font-size: 20px; text-align: center; margin-right: 20px; color: #fff;}
</style>