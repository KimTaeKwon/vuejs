<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div> {{result}} </div>
        <div>현재 {{score}} 점</div>
    </div>
</template>

<script>
const rspCodes = {
    바위 : '0',
    가위 : '-140px',
    보 : '-280px'
};

const scores = {
    가위 : 1,
    바위 : 0,
    보 : -1,
}

const computerChoice = (imgCode) => {
    return Object.entries(rspCodes).find(function (v) {
        return v[1] === imgCode;
    })[0];
}

let interval = null;

export default {
    data() {
        return {
            imgCode: rspCodes.바위,
            result: "",
            score: 0,
        }
    },
    computed: {
        computedStyleObject() {
            return{
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCode} 0`,
            }
        }
    },
    methods: {
        changeHand() { // 중복 사용시 methods에 함수로
            interval = setInterval(() => {
                if(this.imgCode === rspCodes.바위) {
                    this.imgCode = rspCodes.가위;
                } else if(this.imgCode === rspCodes.가위) {
                    this.imgCode = rspCodes.보;
                } else if(this.imgCode === rspCodes.보) {
                    this.imgCode = rspCodes.바위;
                }
            }, 100);
        },
        onClickButton(choice){
            clearInterval(interval);
            const mysSore = scores[choice];
            const cpuScore = scores[computerChoice(this.imgCode)];
            const diff = mysSore - cpuScore;

            if (diff === 0) {
                this.result = "비겼습니다.";
            } else if ([-1, 2].includes(diff)) {
                this.result = "이겼습니다."
                this.score += 1;
            } else {
                this.result = "졌습니다."
                this.score -= 1;
            }
            setTimeout(() => {
                this.changeHand();
            }, 1000);
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');

    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
        this.changeHand();
        
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeUnmount() {
        clearInterval(interval);
    },
}
</script>

<style scoped>
    #computer {width: 140px; height: 200px; background-position: 0 0;}
</style>