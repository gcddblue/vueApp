<template>
  <div class = "mirrorInfo" @click = "closeBox">
    <div class = "infoBox animate bounceInRight" :class = "{ bounceOutRight: isClass1 }" @click.stop = "" >
      <div class = "infoBox_h">
        <i class = "el-icon-close" @click = "closeBox"></i>
      </div>
      <div class = "infoBox_con">
        <div class = "infoBoxCon_b1">
          <div class = "imgBox">
            <img v-lazy = "InfoList.image_icon">
          </div>
          <p><strong>{{InfoList.image_name}}</strong><br/>类型：{{InfoList.image_category}}</p>
        </div>
        <div class = "infoLabel">
          <p>基本信息</p>
        </div>
        <div class = "infoList">
          <el-scrollbar>
            <div class = "infoList_txt">
              <h2>Jenkins 持续集成</h2>
              <p>Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。<br/>Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。</p>
              <h2>主要特点</h2>
              <p>简单性<br/>Java看起来设计得很像C++，但是为了使语言小和容易熟悉，设计者们把C++语言中许多可用的特征去掉了，这些特征是一般程序员很少使用的。例如，Java不支持go to语句，代之以提供break和continue语句以及异常处理。Java还剔除了C++的操作符过载（overload）和多继承特征，并且不使用主文件，免去了预处理程序。因为Java没有结构，数组和串都是对象，所以不需要指针。Java能够自动处理对象的引用和间接引用，实现自动的无用单元收集，使用户不必为存储管理问题烦恼，能更多的时间和精力花在研发上。<br/>面向对象<br/>Java是一个面向对象的语言。对程序员来说，这意味着要注意应中的数据和操纵数据的方法（method），而不是严格地用过程来思考。在一个面向对象的系统中，类（class）是数据和操作数据的方法的集合。数据和方法一起描述对象（object）的状态和行为。每一对象是其状态和行为的封装。类是按一定体系和层次安排的，使得子类可以从超类继承行为。在这个类层次体系中有一个根类，它是具有一般行为的类。Java程序是用类来组织的。 Java还包括一个类的扩展集合，分别组成各种程序包（Package），用户可以在自己的程序中使用。例如，Java提供产生图形用户接口部件的类（java.awt包），这里awt是抽象窗口工具集（abstract windowing toolkit）的缩写，处理输入输出的类（java.io包）和支持网络功能的类（java.net包）。<br/>分布性<br/>Java设计成支持在网络上应用，它是分布式语言。Java既支持各种层次的网络连接，又以Socket类支持可靠的流（stream）网络连接，所以用户可以产生分布式的客户机和服务器。 网络变成软件应用的分布运载工具。Java程序只要编写一次，就可到处运行。</p>
            </div>
          </el-scrollbar>
        </div>
        <el-button type = "primary" size = "small" @click = "toContainer">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isClass1: false
    }
  },
  props: ['InfoList'],
  methods: {
    closeBox () {
      this.isClass1 = true
      let that = this
      setTimeout(() => {
        that.$emit('hideInfo')
        that.isClass1 = false
      }, 400)
    },
    toContainer () {
      this.$router.push('/container')
    }
  }
}
</script>

<style lang = "scss" scoped>
@import "~src/common/scss/variable.scss";

  .mirrorInfo{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    top:0;
    left:0;
    z-index: 999;
  }
  .infoBox{
    position:absolute;
    width:860px;
    right:0;
    top:0;
    height: 100%;
    background-color:#f8f8f8;
    color:#666;
    animation-duration: .8s;
    .el-icon-close{
      float: right;
      line-height: 60px;
      font-size: 21px;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  .bounceOutRight{
    animation-duration: .4s;
  }
  .infoBox_h{
    height: 60px;
    line-height: 60px;
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
    box-sizing: border-box;
  }
  .infoBox_con{
    padding: 30px;
    height: calc(100% - 60px);
    box-sizing: border-box;
    .infoBoxCon_b1{
      background: #fff;
      border: 1px solid #e2e2e2;
      height: 140px;
      padding: 30px;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
      p{
        padding: 15px 0 0 114px;
      }
      strong{
        font-weight: bold;
      }
      .imgBox{
        width: 120px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        position: absolute;
        img{
          //height: 100%;
          width: 80px;
        }
      }
    }
  }
  .infoLabel{
    border-bottom: 1px solid #d9d9d9;
    height: 56px;
    position: relative;
    p{
      position: absolute;
      border-bottom:2px solid $col-text-ligblue;
      color: $col-text-ligblue;
      font-size: 14px;
      top: 13px;
      padding: 10px 20px;
    }
  }
  .infoList{
    margin-top: 30px;
    height: calc(100% - 250px);
    box-sizing: border-box;
    border: 1px solid #e2e2e2;
    overflow: hidden;
    .infoList_txt{
      padding: 0 30px 20px 30px;
    }
    h2{
      font-size: 1.5em;
      font-weight: bold;
      margin-top: 30px;
    }
    p{
      line-height: 22px;
    }
  }
</style>
<!-- 解决scoped修改不了其他组件样式问题 -->
<style lang = "scss">
  .infoList .el-scrollbar{
    height: 100%;
    .el-scrollbar__wrap{
        overflow-x: hidden !important;
      }
  }
  .mirrorInfo .el-button{
    padding:9px 25px;
    display: block;
    margin:10px auto 0 auto;
  }
</style>
