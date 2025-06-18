
<template>




  <div class="common-layout">
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside>
        -->
       <Aside></Aside>
      <el-container>
        <el-header><NavHeader></NavHeader></el-header>
        
        <el-main>
             <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Aside from '../components/aside.vue';
import NavHeader from '../components/navHeader.vue';
</script>
<style lang="less" scoped>
.common-layout {
    height: 100%;
    .el-container{
        height: 100%;
    }
}
</style>