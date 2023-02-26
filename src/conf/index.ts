import { reactive } from 'vue'

const urlEnv = reactive({
    checkCodeImgUrl: 'http://localhost:8009/test/img-test?t='
})

const clientStatus = reactive({
    isLogin: false
})

export {
    urlEnv, clientStatus
}