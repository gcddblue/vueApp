<template>
  <div id="app" class = "isHidden">
    <m-header></m-header>
    <div class = "contentMain">
      <el-scrollbar class = "pageScroll">
        <div class = "routerDiv">
          <keep-alive>
           <router-view></router-view>
          </keep-alive>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'

export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang = scss>
@import "common/scss/base.scss";

#app{
  height: 100%;
}
.contentMain{
  height: 100%;
  .pageScroll{
    height: calc(100% - 60px);
    margin-top: 60px;
    &>.el-scrollbar__wrap{
      overflow-x: hidden;
    }
  }
}
.routerDiv{
  padding: 40px 0 50px 0;
}
</style>
