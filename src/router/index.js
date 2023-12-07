import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/components/main/Main'
import Ch1_01View from '@/components/Ch1_01'
import Ch1_03View from '@/components/Ch1_03'
import Ch1_05View from '@/components/Ch1_05'
import Ch2_01View from '@/components/Ch2_01'
import Ch3_01View from '@/components/Ch3_01'
import Ch4_01View from '@/components/Ch4_01'
import Ch5_01View from '@/components/Ch5_01'
import Ch6_01View from '@/components/Ch6_01'

const routes = [
    {
        path: '/home',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/ch1_01',
        name: 'Ch1_01View',
        component: Ch1_01View,
    },
    {
        path: '/ch1_03',
        name: 'Ch1_03View',
        component: Ch1_03View,
    },
    {
        path: '/ch1_05',
        name: 'Ch1_05View',
        component: Ch1_05View,
    },
    {
        path: '/ch2_01',
        name: 'Ch2_01View',
        component: Ch2_01View,
    },
    {
        path: '/ch3_01',
        name: 'Ch3_01View',
        component: Ch3_01View,
    },
    {
        path: '/ch4_01',
        name: 'Ch4_01View',
        component: Ch4_01View,
    },
    {
        path: '/ch5_01',
        name: 'Ch5_01View',
        component: Ch5_01View,
    },
    {
        path: '/ch6_01',
        name: 'Ch6_01View',
        component: Ch6_01View,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;



// import {createRouter, createWebHashHistory} from 'vue-router'
// import IntroduceView from '../../til/ch01/Introduce'

// const routes = [
//     {
//         path: '/Introduce',
//         name: 'Introduce',
//         component: IntroduceView,
//     }
// ]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// })

// export default router;