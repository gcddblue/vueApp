<template>
  <div class = "container" ref = "minHeight">
    <h2 class = "pageTil"><i class = "el-icon-back" @click = "back"></i>容器配置</h2>
    <div class = "serch-div">
      <div class = "conName">
        <label>容器名称</label>
        <el-input placeholder = "给你的新容器取个名字吧" v-model = "conName" suffix-icon = "el-icon-edit" clearable></el-input>
      </div>
      <div class = "selNode">
        <p class = "selNode_p0">选取节点</p>
        <ul class = "nodeList clearFixed">
          <li v-for = "item in nodeLists" :key = "item.id">
            <p class = "nodeList_p0"><span>{{item.country}}</span><br/>{{item.info}}</p>
            <div class = "imgBox">
              <img v-lazy = "item.image">
            </div>
            <label class = "nodeCheck"><i class = "el-icon-check"></i></label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conName: '',
      nodeLists: [{
        id: 1,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 2,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 3,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 4,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 5,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 6,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 7,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 8,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 9,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 10,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 11,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      },
      {
        id: 12,
        country: 'America',
        info: 'the United States',
        image: require('./america-icon.png')
      }
      ]
    }
  },
  mounted () {
    let boxhei = (document.documentElement.clientHeight - 150) + 'px'
    this.$refs.minHeight.style.minHeight = boxhei
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang = "scss" scoped>
@import "~src/common/scss/variable.scss";
  .container{
    @extend %white-box;
  }
  .pageTil{
    @extend %box-title;
  }
  .serch-div{
    margin: 30px 100px 0 100px;
    position: relative;
  }
  .conName{
    .el-input{
      width: 300px;
    }
    label{
      margin-right: 10px;
      @extend %text-style;
    }

  }
  .selNode_p0{
    @extend %text-style;
    margin-bottom: -10px;
  }
  .selNode{
    margin-top: 40px;
  }
  .nodeList{
    li{
      float: left;
      position:relative;
      overflow: hidden;
      width: 210px;
      height: 80px;
      box-sizing: border-box;
      border:1px solid #efefef;
      margin-left: 33px;
      margin-top: 20px;
      cursor: pointer;
      border-radius: 4px;
      &:nth-child(4n+1){
        margin-left: 0;
      }
      &:hover{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
      .nodeList_p0{
        margin: 20px 0 0 76px;
        span{
          font-weight: bold;
        }
      }
      .imgBox{
        position: absolute;
        width:46px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        top:16px;
        left:16px;
        img{
          width: 100%;
        }
      }
    }
  }
  .paginaDiv{
    margin-top: 30px;
    .el-pagination{
      float: right;
    }
  }
  .nodeCheck{
    position: absolute;
    right: -17px;
    top: -7px;
    width: 46px;
    height: 26px;
    background: #13ce66;
    text-align: center;
    transform: rotate(45deg);
    box-shadow: 0 1px 1px #ccc;
    i{
      color:#fff;
      font-size: 12px;
      margin-top: 12px;
      transform: rotate(-45deg);
    }
  }
</style>
