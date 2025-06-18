<template>
 <el-menu
     
        :style="{width:!isCollapse ?'230px':'64px'}"
        :unique-opened="true"
        active-text-color="#ffd04b"
        background-color="#545c64"
        
        class="aside-container"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :default-active="active"
      >
        <p class="logo-lg">{{ isCollapse ?'乐享陪诊':'乐享陪诊' }}</p>
            <TreeMenu :menuData="menuData" :index="1"></TreeMenu>
      </el-menu> 
</template>
<script setup>
import TreeMenu from './treeMenu.vue';
import {useRouter} from 'vue-router';
import {reactive,computed  } from 'vue';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore()
// const menuData = reactive(router.options.routes[0].children)
const menuData = computed(()=>store.state.menu.routerList)

const isCollapse = computed(()=>store.state.menu.isCollapse)
// console.log(router,'router');
const active=computed(()=>store.state.menu.menuActive)
const handleOpen=()=>{}
const handleClose=()=>{}

</script>
<style scoped lang="less">
.aside-container{
    height: 100%;
    .logo-lg{
        font-style: 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
    }
}
</style>