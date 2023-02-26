<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import type { FormInstance } from 'element-plus'
// data
let formRef = ref<FormInstance>() // 获取DOM元素 form
let formData = reactive({
    userName: '',
    email: '',
    password: '',
    emailCheckCode: ''
})
let passwordConfirm = ref('')
let rules = reactive({})
let sendButShow = ref(true)
let count = ref(15)
// 提交表单
function onSubmit() {
}
// 清空表单
function resetForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.resetFields()
    passwordConfirm.value = ''
}
// 发送邮箱验证码
function sendEmailCode() {
    sendButShow.value = sendButShow.value ? false : true
    count.value = 15
    let timer = setInterval(() => {
        if (count.value > 0 && count.value <= 15) {
            count.value--
        } else {
            sendButShow.value = true
            clearInterval(timer) // 内部清除定时器，会将定时器最后一次执行完后销毁
            console.log('已经销毁')
        }
    }, 1000)
    
    console.log('定时器')
    
}
</script>

<template>
    <div class="register-body">
        <div class="register-form">
            <h3>注册</h3>
            <el-form
                ref="formRef"
                :model="formData"
                status-icon
                :rules="rules"
                class="demo-ruleForm"
            >
                <el-form-item prop="userName">
                    <el-input 
                        v-model="formData.userName"
                        placeholder="用户名"
                        autocomplete="off"
                        clearable
                    />
                </el-form-item>
                <el-form-item prop="email">
                    <el-input 
                        v-model="formData.email"
                        placeholder="邮箱"
                        autocomplete="off"
                        clearable 
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="formData.password"
                        type="password"
                        placeholder="密码"
                        autocomplete="off"
                        show-password
                    />
                </el-form-item>
                <el-form-item prop="passwordConfirm">
                    <el-input
                        v-model="passwordConfirm"
                        type="password"
                        placeholder="再次输入密码"
                        autocomplete="off"
                        show-password
                    />
                </el-form-item>
                <el-form-item prop="emailCheckCode">
                    <div class="emailCode-div">
                        <el-input 
                            v-model="formData.emailCheckCode"
                            placeholder="邮箱验证码"
                            autocomplete="off"
                            clearable 
                        />
                    </div>
                    <el-button @click="sendEmailCode" v-if="sendButShow">发送验证码</el-button>
                    <el-button v-if="!sendButShow" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ count < 10 ? '&nbsp;&nbsp;' + count : count }}s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">注册</el-button>
                    <el-button @click="resetForm(formRef)">清空</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped>
.register-form {
    width: 300px;
    margin: 0 auto;
    margin-top: 120px;
    text-align: center;
}
.emailCode-div {
    width: 188px;
    margin-right: 10px;
}
</style>