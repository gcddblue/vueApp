<template>
  <div class = "m-header">
    <div class = "mHead_l">
      <a href="javascript:;" class = "mHead_logo"><img src="./logo.png"></a>
      <div class = "mHead_pos">
        <div class = "mHead_img">
          <img src="./docker.png">
        </div>
      </div>
    </div>
    <div class = "mHead_r">
      <div class = "mHeadr_item">
        <el-dropdown>
          <span class = "el-dropdown-link">hy12345678<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot = "dropdown">
            <el-dropdown-item>安全中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
@import "~src/common/scss/variable.scss";

  .m-header{
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: $col-bg;
    color:#fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    padding: 0 30px;
  }
  .mHead_l{
    float: left;
    height: 60px;
    .mHead_logo{
      display: block;
      margin-top: 11px;
    }
    .mHead_pos{
      position: absolute;
      height: 60px;
      top: 0;
      left: 115px;
      .mHead_img{
        height: 80px;
        margin-top: -11px;
        img{
          height: 100%;
        }
      }
    }
  }
  .mHead_r{
    float: right;
    height: 60px;
    .mHeadr_item{
      float: left;
      height: 60px;
    }
  }
</style>
<style lang = "scss">
  .mHead_r{
    .el-dropdown-link{
      color:#fff;
    }
    .el-dropdown{
      margin-top: 20px;
    }
  }
</style>
