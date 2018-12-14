<template>
  <div class = "mirrorSel" ref = "minHeight">
    <h2 class = "pageTil"><i class = "el-icon-back" @click = "back"></i>镜像选配</h2>
    <div class = "serch-div">
      <div class = "serch-box">
        <el-input placeholder = "搜索镜像" v-model = "query" @keyup.enter.native = "seacrhMirrorList"></el-input>
        <i class = "el-icon-search" @click = "seacrhMirrorList"></i>
      </div>
      <!-- <div class = "select-box">
        <label>排序</label>
        <el-select v-model = "selValue" placeholder = "请选择" size = "small">
          <el-option v-for = "item in options" :key = "item.id" :value = "item.value"></el-option>
        </el-select>
      </div> -->
      <div class = "mirrorList">
        <div class = "serchTil">共{{total}}个搜索结果</div>
        <ul class = "mirror-ul clearFixed">
          <li v-for = "item in options" :key = "item.id" @click = "mirrorInfoShow(item.image_code)">
            <p class = "mirrorBox-p0"><span>{{item.image_name}}</span><br/>{{item.image_category}}</p>
            <p class = "mirrorBox-p1">{{item.image_intro}}</p>
            <div class = "imgTag">
              <img v-lazy = "item.image_icon">
            </div>
          </li>
        </ul>
      </div>
      <div class = "paginaDiv clearFixed">
        <el-pagination layout = "prev, pager, next" :current-page = "currentPage" :page-size = "pageSize" :total = "total" background @current-change = "handleCurrent"></el-pagination>
      </div>
    </div>
    <mirror-info v-show = "showTr" :InfoList = "InfoList" @hideInfo = "showTr = false"></mirror-info>
  </div>
</template>

<script>
import MirrorInfo from 'cpnts/mirror-info/mirror-info'
import {getMirrorList, getMirrorInfo} from 'api/mirror'

export default {
  data () {
    return {
      query: '',
      selValue: '',
      showTr: false,
      total: 0,
      pageSize: 8,
      currentPage: 1,
      InfoList: [],
      options: []
    }
  },
  created () {
    this._getMirrorList(1)
  },
  mounted () {
    let boxhei = (document.documentElement.clientHeight - 150) + 'px'
    this.$refs.minHeight.style.minHeight = boxhei
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleCurrent (val) {
      this._getMirrorList(val)
    },
    mirrorInfoShow (imagecode) {
      this._getMirrorInfo(imagecode)
      this.showTr = true
    },
    seacrhMirrorList () {
      if (this.query === '') {
        this.$message({
          message: '请输入要查询的镜像',
          type: 'warning'
        })
      } else {
        this._getMirrorList(1, {search: this.query})
      }
    },
    _getMirrorList (page, paras) {
      this.currentPage = page
      getMirrorList(this.pageSize, page, {
        showLod: true,
        params: {search: this.query}
      }).then((res) => {
        let result = res.data
        if (result.state) {
          this.total = result.data.total
          this.options = result.data.infos
        } else {
          this.$message.error(result.Msg)
        }
      }).catch(() => {})
    },
    _getMirrorInfo (imagecode) {
      getMirrorInfo(imagecode, {showLod: true}).then((res) => {
        let result = res.data
        if (result.state) {
          this.InfoList = result.data
        }
      })
    }
  },
  components: {
    MirrorInfo
  }
}
</script>

<style lang = "scss" scoped>
@import "~src/common/scss/variable.scss";

  .mirrorSel{
    @extend %white-box;
  }
  .pageTil{
    @extend %box-title;
  }
  .serch-div{
    margin: 30px 100px 0px 100px;
    padding-bottom: 60px;
    position: relative;
  }
  .serch-box{
    width: 500px;
    position: relative;
    .el-icon-search{
      position: absolute;
      width: 40px;
      top: 0;
      right: 0px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      font-size: $font-size-medium;
      &:hover{
        color:$col-text-ligblue;
        font-weight: bold;
      }
    }
  }
  .select-box{
    width: 500px;
    position:absolute;
    right: 0;
    top:4px;
    label{
      margin-right: 10px;
      color:$col-text-lab;
      font-size: 14px;
    }
    .el-select{
      width: 180px;
    }
  }
  .mirrorList{
    margin-top: 40px;
    .serchTil{
      font-size: 16px;
    }
    .mirror-ul{
      //margin-top: 30px;
      li{
        float: left;
        position:relative;
        width: 206px;
        height: 196px;
        background-color: #fff;
        font-size: 12px;
        box-shadow: 0 0px 2px rgba(0,0,0,.2);
        border-radius: 4px;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 38px;
        &:nth-child(4n+1){
          margin-left: 0;
        }
        .imgTag{
          position:absolute;
          width: 50px;
          top:14px;
          left:10px;
          img{
            width: 100%;
          }
        }
        .mirrorBox-p0{
          margin-left: 76px;
          margin-top: 20px;
          span{
            font-weight: bold;
          }
        }
        .mirrorBox-p1{
          margin-top: 40px;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          padding: 0 10px;
        }
      }
    }
  }
  .paginaDiv{
    position: absolute;
    right: 0;
    bottom: 0px;
    .el-pagination{
      //float: right;
    }
  }
</style>
