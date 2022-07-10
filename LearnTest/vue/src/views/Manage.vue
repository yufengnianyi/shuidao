<template>
  <el-container style="height: 100vh;">

    <el-aside :width="sideWidth + 'px'" style="background-color: rgb(48,65,86) ; box-shadow: 2px 0 6px rgb(0 21 41/35%);">
      <Aside :isCollapase="isCollapse" :logoTestShow="logoTestShow"/>
    </el-aside>

    <el-container>

      <el-header style=" font-size: 12px ; border-bottom: 1px solid #ccc;">
        <Header :collapseBtnClass="collapseBtnClass" :collapse="isCollapse" />
      </el-header>

      <el-main>
<!--        当前子路由表现的页面 在 router-view-->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import request from "@/utils/request";

import Aside from "@/components/Aside";
import Header from "@/components/Header";


export default {
  name: 'HomeView',
  data(){
    return {
      collapseBtnClass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth: 200,
      logoTestShow: true,
    }
  },
  components:{
    Header,
    Aside
  },
  methods:{
    collapse(){//点击标签后触发 collapse函数
        this.isCollapse = !this.isCollapse;
        if(this.isCollapse){//收缩
          this.sideWidth = 63
          this.collapseBtnClass = 'el-icon-s-unfold'
          this.logoTestShow = false
        }else{//展开
          this.sideWidth = 200
          this.collapseBtnClass = 'el-icon-s-fold'
          this.logoTestShow = true;
        }
    }
  }

}
</script>


