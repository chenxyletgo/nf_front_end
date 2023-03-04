import { reactive } from 'vue'

const urlEnv = reactive({
    checkCodeImgUrl: 'http://localhost:8009/test/img-test?t='
})

const clientStatus = reactive({
    isLogin: true
})

export {
    urlEnv, clientStatus
}