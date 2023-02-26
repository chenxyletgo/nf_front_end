## 版本
* node.js v18.14.0
## 命令
* npm i element-plus
* npm install -D unplugin-vue-components unplugin-auto-import
<br> 修改vite.config.ts文件
```typescript
// npm install -D unplugin-vue-components unplugin-auto-import 在开发环境安装element-plus自动按需导入的插件
// 前提要导入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [
        ...,
        AutoImport({
        resolvers: [ElementPlusResolver()]
        }),
        Components({
        resolvers: [ElementPlusResolver()]
        }),
    ]
})
```
* npm i vue-router
* npm i axios
