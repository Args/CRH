<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="main">
      <el-col>
        <el-menu :default-active="subActiveIndex" theme="dark">
          <el-submenu index="1">
            <template slot="title">作业计划</template>
            <el-menu-item index="1-1" @click="addWork">添加作业计划</el-menu-item>
            <el-menu-item index="1-2" @click="manageWork">作业计划管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">作业操作</template>
            <el-menu-item index="2-1" @click="workOperate">作业操作</el-menu-item>
            <el-menu-item index="2-2" @click="trainData">一车一档查询</el-menu-item>
            <el-menu-item index="2-3" @click="statistics">动车组滤网布工作量统计</el-menu-item>
            <el-menu-item index="2-4" @click="statisticsManage">动车组滤网布统计管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  // 引用路由
  import VueRouter from 'vue-router'
  // 光引用不成，还得使用

  Vue.use(VueRouter)
  // 引用路由配置文件
  import routes from '../config/routes'
  // 使用配置文件规则
  const router = new VueRouter({
      routes
  })
  export default {
    name:"work",
    components: {},
    data () {
      return {
          subActiveIndex:'1-1'
      }
    },
    methods: {
        addWork: function () {
            router.push("/home/work/add_work")
        },
        manageWork: function () {
            router.push("/home/work/manage_work")
        },
        workOperate: function () {
            router.push("/home/work/work_operate")
        },
        trainData: function () {
            router.push("/home/work/train_data")
        },
        statistics: function () {
            router.push("/home/work/statistics")
        },
        statisticsManage: function () {
            router.push("/home/work/statistics_manage")
        }

    },
    computed: {

    },
    created: function () {
        router.push("/home/work/add_work")
    },
    mounted: function () {

    },
  }

</script>
<style>
  .main {
    background: #324057;
    position: absolute;
    top: 120px;
    width: 210px;
    bottom: -1px;
  }
  .content-container {
    background-color: #f1f2f7;
    border-width: 2px;
    position: absolute;
    right: 0px;
    top:120px;
    bottom: -1px;
    left: 210px;
    /*overflow-y: scroll;*/
    /*padding: 20px;*/
  }
</style>
