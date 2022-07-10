<template>
  <el-menu :default-openeds="['1', '3']" style="mis-height: 100%; overflow-x: hidden; "
           background-color="rgb(48,65,86)"
           text-color="#fff"
           active-text-color="#ffd04b"
           :collapse-transition="false"
           :collapse="isCollapse"
           router
           @select="handleSelect"
           class="note" :style ="note"
  >
    <div style="height: 80px; line-height: 80px; text-align: center">
      <img src="../assets/logo.png" alt="" style = "width: 20px; height: 20px; position: relative; top: 5px; margin-left: 5px">
      <b style="color: aquamarine" v-show="logoTestShow">后台管理菜单</b>
    </div>
<!--    点击主页就会跳转到../的页面-->
    <el-menu-item index="/home">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">主页</span>
      </template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item index="/cc">
        <i class="el-icon-star-off"></i>
        <span slot="title">远程控制</span>
      </el-menu-item>
      <el-menu-item index="/chart">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">数据表单</span>
      </el-menu-item>
      <el-menu-item index="/team">
        <i class="el-icon-crop"></i>
        <span slot="title">关于我们</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:{
    isCollapse: Boolean,
    logoTestShow: Boolean
  },
  methods:{
    handleSelect(index){
      console.log(index)
      console.log(this.$router.options.routes)
    }
  }
}
</script>

<style scoped>

</style>