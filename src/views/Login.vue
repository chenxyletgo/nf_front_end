<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { urlEnv } from '../conf'
import type { FormInstance } from 'element-plus'
// data
let formRef = ref<FormInstance>() // 获取DOM元素 form
let checkCodeImgUrl = ref(urlEnv.checkCodeImgUrl)
let formData = reactive({
    email: '',
    password: '',
    checkCode: ''
})
// 表单参数约束
let rules = reactive({
    email: [
        { 
            validator: (rule: any, value: any, callback: any) => {
                let emailReg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
                if (value.indexOf(' ') != -1) {
                    callback(new Error('输入不能有空格'))
                } else if (value.trim() === '') {
                    callback(new Error('邮箱是需要的'))
                } else if (!emailReg.test(value)) {
                    callback(new Error('邮箱格式不正确'))
                }
                callback()
            }
        }
    ],
    password: [
        { 
            validator: (rule: any, value: any, callback: any) => {
                let passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/
                if (value.indexOf(' ') != -1) {
                    callback(new Error('输入不能有空格'))
                } else if (value.trim() === '') {
                    callback(new Error('密码是需要的'))
                } else if (!passReg.test(value)) {
                    callback(new Error('密码长度：[8-16]，内容：[数字和字母的组合]'))
                }
                callback()
            }
        }
    ],
    checkCode: [
        { 
            validator: (rule: any, value: any, callback: any) => {
                let checkCodeReg = /^[0-9A-Za-z]{5}$/
                if (value.indexOf(' ') != -1) {
                    callback(new Error('输入不能有空格'))
                } else if (value.trim() === '') {
                    callback(new Error('验证码是需要的'))
                } else if (!checkCodeReg.test(value)) {
                    callback(new Error('验证码长度：[5]，内容：[数字或字母]'))
                }
                callback()
            }
        }
    ]
})
// 刷新验证码图片
function refreshCheckCodeImg() {
    checkCodeImgUrl.value = urlEnv.checkCodeImgUrl + new Date().getTime()
}
// 提交表单
function onSubmit(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            // 执行到这，说明数据格式正确，
            // 将formData数据通过axios发送到后端
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
}
</script>

<template>
    <div class="login-body">
        <div class="login-form">
            <h3>登录</h3>
            <el-form :model="formData" ref="formRef" :rules="rules" status-icon>
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
                        status-icon
                        show-password
                    />
                </el-form-item>
                <el-form-item prop="checkCode">
                    <div class="checkCode-div">
                        <el-input
                            v-model="formData.checkCode"
                            placeholder="验证码"
                            autocomplete="off"
                            clearable
                        />
                    </div>
                    <img
                        class="checkCode-img"
                        @click="refreshCheckCodeImg"
                        :src="checkCodeImgUrl"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
                    <el-button @click="resetForm(formRef)">清空</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped>
.login-form {
    width: 300px;
    margin: 0 auto;
    margin-top: 120px;
    text-align: center;
}
.checkCode-div {
    width: 160px;
}
.checkCode-img {
    height: 32px;
    border-radius: 5px;
    margin-left: 10px;
    border: 1px solid #dcdfe6;
}
.checkCode-img:hover {
    cursor: pointer;
}
</style>