<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid" >
        <div class="navbar-header" style="margin-top: 5px" >
          <a class="sinsim-logo" href="#" >ABC</a >
        </div >
        <ul class="nav navbar-nav navbar-right" >
          <li ><a href="#" ><span class="glyphicon glyphicon-log-in" ></span ></a ></li >
        </ul >
        <ul class="nav navbar-nav navbar-right" >
          <li ><a href="#" >张三 [XXXX服务部]</a ></li >
        </ul >
      </div >
    </nav>
  </div>
</template>
<script>

  export default {
    data(){
      return {

      }
    },
    props: {
      activeIndex: {
        type: Number,
        default: 0
      },
    }
  }

</script>
<style scoped>

</style>