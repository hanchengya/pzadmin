<template lang="">
    <h1>用户登录</h1>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                 <van-field
                    v-model="form.userName"
                    :rules="[{ required: true ,message:'请填写用户名'}]"
                    label="用户名"
                    placeholder="请输入用户名"
                    name="用户名"
                />
                <van-field
                    v-model="form.passWord"
                    type= "password"
                    :rules="[{ required: true ,message:'请填写密码'}]"
                    label="密码"
                    placeholder="请输入密码"
                    name="密码"
                />
                <div class="btn">
                    <van-button round block native-type="submit" type="primary">提交</van-button>
                </div>    
            </van-cell-group>
        </van-form>
</template>
<script setup>
import { reactive,getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
//获取当前vue实例
const {proxy} = getCurrentInstance()
const router = useRouter()
//表单数据
const form = reactive({
    userName:'',
    passWord:''
})
//表单提交1111
const onSubmit =async ()=>{
    const  {data} =await proxy.$api.login(form)
    if(data.code===10000){
        localStorage.setItem('h5_token',data.data.token)
        localStorage.setItem('h5_userInfo',JSON.stringify(data.data.userInfo))
        router.push('/home')
    }
}
</script>
<style lang="less" scoped>
    h1{
        text-align: center;
    }
    .btn{
        margin: 16px;
    }
</style>