<template>
    <div>
        <div>당첨 숫자</div>
        <div id="result">
            <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한 번 더!</button>
    </div>
</template>

<script>
 import Ch6_01_LottoBallVue from './Ch6_01_LottoBall.vue';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i) => i +1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);
    return [...winNumbers, bonusNumber];
}

const timeouts = [];

export default {
    components : {
        'lotto-ball' : Ch6_01_LottoBallVue,
    },
    data() {
        return {
            winNumbers : getWinNumbers(),
            winBalls : [],
            redo : false,
            bonus : null,
        }
    },
    methods: {
        onClickRedo() {
            this.winNumbers = getWinNumbers();
            this.winBalls = [];
            this.bonus = null;
            this.redo = false;
            this.showBalls();
        },
        showBalls() {
            for (let i = 0; i < this.winNumbers.length -1; i++) {
                timeouts[i] = setTimeout(() => {
                    this.winBalls.push(this.winNumbers[i]);
                }, (i+1) * 1000);
            }
            timeouts[6] = setTimeout(() => {
                this.bonus = this.winNumbers[6];
                this.redo = true;
            }, 7000);
        }
    },
    mounted() {
        this.showBalls();
    },
    beforeUnmount() {
        timeouts.forEach((t) =>{
            clearTimeout(t);
        });
    },
    // watch: { // watch 사용시 주의 필요함
    //     bonus(val, oldVal) {
    //         console.log(val, oldVal);
    //         if (val === null) {
    //             this.showBalls();
    //         }
    //     }
    // },
}
</script>