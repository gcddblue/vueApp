<template>
  <div class = "extension">
    <el-button type = "primary" @click = "freeUse">免费试用</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    freeUse () {
      this.$router.push('/mirror')
    }
  }
}
</script>

<style lang = "scss" scoped>
@import "~src/common/scss/variable.scss";

  .extension {
    font-size: $font-size-large;
    margin-top: 50px;
  }
</style>
