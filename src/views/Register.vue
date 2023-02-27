<script setup lang='ts'>
import { ref, reactive, watch, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
// data
const formRef = ref<FormInstance>() // 获取DOM元素 form
const formData = reactive({
    userName: '',
    email: '',
    password: '',
    emailCheckCode: ''
})
const passwordConfirm = ref('') // 密码验证input
const sendButShow = ref(true) // 发送邮箱按钮的替换
const INTERVAL_TIME = 60 // 发送邮箱验证码后间隔时间(秒)
const count = ref(0)
// 表单验证约束
const rules = reactive({
    // TODO 表单约束实现
    userName: [
        { 
            validator: (rule: any, value: any, callback: any) => {
            }
        }
    ],
    email: [],
    password: [],
    emailCheckCode: []
})
// 提交表单
function onSubmit(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            // 执行到这，说明数据格式正确，
            // TODO 将formData数据通过axios发送到后端,根据返回结果反馈给用户,若成功自动跳转到
            // login并且自动填充
        } else {
            // 执行到这，说明数据格式不正确，需要提醒用户
            ElMessage.error('输入不正确')
        return false
        }
    })
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
    count.value = INTERVAL_TIME
    let timer = setInterval(() => {
        if (count.value > 0 && count.value <= INTERVAL_TIME) {
            count.value--
        } else {
            sendButShow.value = true
            clearInterval(timer) // 内部清除定时器，会将定时器最后一次执行完后销毁
        }
    }, 1000)
    // TODO 向后端发送用户使用的邮箱号,让后端给该邮箱发送验证码,返回是否成功,根据结果
    // 创建一个ElMessage消息框反馈给用户
}
</script>

<template>
    <div class="register-body">
        <div class="postion-div">
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
    </div>
</template>

<style scoped>
.postion-div {
    width: 400px;
    margin: 0 auto;
    margin-top: 120px;
    border: 1px solid white;
    background-color: white;
    border-radius: 20px;
}
.register-form {
    width: 300px;
    margin: 0 auto;
    text-align: center;
}
.emailCode-div {
    width: 188px;
    margin-right: 10px;
}
</style>