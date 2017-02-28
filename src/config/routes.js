import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'
import Home from "../components/home.vue"
import Work from "../components/work.vue"
import Search from "../components/search.vue"
import Data from "../components/data.vue"
import System from "../components/system.vue"
import AddWork from "../components/work/add_work.vue"
import ManageWork from "../components/work/manage_work.vue"
import WorkOperate from "../components/work/work_operate.vue"
import TrainData from "../components/work/train_data.vue"
import Statistics from "../components/work/statistics.vue"
import StatisticsManage from "../components/work/statistics_manage.vue"

export default
	[
        {
            path: '/login',
            component: Login,
            name: '',
            hidden: true
        },
        {
            path: '/404',
            component: NotFound,
            name: '',
            hidden: true
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/home/work',
                    component: Work,
                    name: 'work',
                    hidden: true,
                    children: [
                        { path: '/home/work/add_work', component: AddWork, name: 'add_work' },
                        { path: '/home/work/manage_work', component: ManageWork, name: 'manage_work' },
                        { path: '/home/work/work_operate', component: WorkOperate, name: 'work_operate' },
                        { path: '/home/work/train_data', component: TrainData, name: 'train_data' },
                        { path: '/home/work/statistics', component: Statistics, name: 'statistics' },
                        { path: '/home/work/statistics_manage', component: StatisticsManage, name: 'statistics_manage' }
                    ]
                },
                { path: '/home/search', component: Search, name: 'search' },
                { path: '/home/data', component: Data, name: 'data' },
                { path: '/home/system', component: System, name: 'system' },
                { path: '/home', redirect: '/home/work' },
            ],
        },
        // {
        //     path: '/work',
        //     component: Work
        // },
        // {
        //     path: '/search',
        //     component: Search
        // },
        // {
        //     path: '/data',
        //     component: Data
        // },
        // {
        //     path: '/system',
        //     component: System
        // },
        {
            path: '*',
            redirect: '/home'
        }
	]
