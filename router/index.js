import {createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../src/components/FirstPage.vue'
import EditPage from '../src/components/EditPage.vue'
import UpdatePage from '../src/components/UpdatePage.vue'
import DeletePage from '../src/components/DeletePage.vue'
import HistoryPage from '../src/components/HistoryPage.vue'
const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'firstPage',
            component: FirstPage
        },
        {
            path: '/edit',
            name: 'editPage',
            component: EditPage
        },
        {
            path: '/update',
            name: 'massUpdate',
            component: UpdatePage
        },
        {
            path: '/delete',
            name: 'massDelete',
            component: DeletePage
        },
        {
            path:'/history',
            name:'history',
            component: HistoryPage
        }

    ]
})

export default router