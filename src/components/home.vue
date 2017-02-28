<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <nav class="navbar-inverse header">
      <div class="container-fluid">
        <div class="navbar-header head-height" style="font-size: large; font-weight: bolder;color: whitesmoke" >
          动车服务部生产经营管理系统
        </div >
        <ul class="nav navbar-nav navbar-right head-height" style="margin-right: 10px">
          <li style="font-size: smaller;color: whitesmoke" >{{current_time}}</li >
        </ul >
        <ul class="nav navbar-nav navbar-right head-height" >
          <li style="margin-top: 5px"><a href="#" style="color: whitesmoke;font-size: smaller; font-weight: bold">张三 [XXXX服务部]</a ></li >
        </ul >
      </div>
    </nav>
    <!--<nav class="nav navbar-default">-->
        <!--<ul class="nav navbar-nav" >-->
          <!--<li  v-bind:class="{'active': activeIndex == 1} " v-on:click="workActive">-->
            <!--<router-link to="/home/work">作业管理</router-link>-->
          <!--</li>-->
          <!--<li v-bind:class="{'active': activeIndex == 2} " v-on:click="searchActive">-->
            <!--<router-link to="/home/search">统计查询</router-link>-->
          <!--</li >-->
          <!--<li v-bind:class="{'active': activeIndex == 3} " v-on:click="dataActive">-->
            <!--<router-link to="/home/data">基础数据</router-link>-->
          <!--</li >-->
          <!--<li v-bind:class="{'active': activeIndex == 4} " v-on:click="systemActive">-->
            <!--<router-link to="/home/system">系统管理</router-link>-->
          <!--</li >-->
        <!--</ul >-->
        <!--<ul class="nav navbar-nav navbar-right" style="margin-right: 10px">-->
          <!--<li ><a href="#" >退出</a ></li >-->
        <!--</ul >-->
        <!--<ul class="nav navbar-nav navbar-right" >-->
          <!--<li ><a href="#" >个人信息</a ></li >-->
        <!--</ul >-->
    <!--</nav>-->
    <nav class="nav navbar-default" style="background-color: #324057;">
      <ul class="nav navbar-nav" >
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="background-color: #324057" theme="dark">
          <el-menu-item index="1" style="font-size: medium">作业管理</el-menu-item>
          <el-menu-item index="2" style="font-size: medium">统计查询</el-menu-item>
          <el-menu-item index="3" style="font-size: medium">基础数据</el-menu-item>
          <el-menu-item index="4" style="font-size: medium">系统管理</el-menu-item>
        </el-menu>
      </ul >
      <ul class="nav navbar-nav navbar-right head-height" style="margin-right: 10px">
        <li ><a href="#" style="color: whitesmoke">退出</a ></li >
      </ul >
      <ul class="nav navbar-nav navbar-right head-height" >
        <li ><a href="#" style="color: whitesmoke">个人信息</a ></li >
      </ul >
    </nav>
    <router-view></router-view>

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
    name:"home",
    components: {},
    data () {
      return {
        current_time: "2017-02-27 12:30:00",
        activeIndex: "1",
      }
    },
    methods: {
//      workActive: function () {
//        this.activeIndex = "1";
//      },
//      searchActive: function () {
//        this.activeIndex = "2";
//      },
//      dataActive: function () {
//        this.activeIndex = "3";
//      },
//      systemActive: function () {
//        this.activeIndex = "4";
//      },

      handleSelect(key, keyPath) {
        this.activeIndex = key
        switch (key) {
          case "1":
            router.push("/home/work")
            break;
          case "2":
            router.push("/home/search")
            break;
          case "3":
            router.push("/home/data")
            break;
          case "4":
            router.push("/home/system")
            break;
        }
      }

    },
    computed: {

    },
    created: function () {
      if(window.location.hash != null) {
        if(window.location.hash.endsWith("/home/system")) {
          this.activeIndex = "4"
        }else if(window.location.hash.endsWith("/home/data")) {
          this.activeIndex = "3"
        }else if(window.location.hash.endsWith("/home/search")) {
          this.activeIndex = "2"
        }else if(window.location.hash.endsWith("/home/work")) {
          this.activeIndex = "1"
        }
      }
    },
    mounted: function () {
    },
  }

</script>
<style>
  .header {
    height: 60px;
    line-height: 60px;
    background: #1D8CE0;
    color: #c0ccda;
  }
</style>
