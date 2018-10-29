# tab-switch

> 里面并没有添加监听事件 仅仅是一次学习 不能直接用于生产环境


![screenshot](/screenshot/gif.gif)

## Usage

```
yarn add @sujian/tabs-switch
```

```
import tabsSwitch from '@sujian/tabs-switch'
Vue.use(tabsSwitch)
```

```
  <tabs>
      <tab-item label='ONE' :prefix-icon="['fas','coffee']"> 我是内容ONE</tab-item>
      <tab-item label='Two' prefix-icon="angry"> 我是内容Two</tab-item>
      <tab-item label='Four'>
        <template slot="prefix">
          <font-awesome-icon icon="dizzy" />
        </template>
        我是内容Four
      </tab-item>
    </tabs>

    <tabs>
      <tab-item label='ONE' :suffix-icon="['fas','coffee']"> 我是内容ONE</tab-item>
      <tab-item label='Two' suffix-icon="angry"> 我是内容Two</tab-item>
      <tab-item label='five'>
        <template slot="suffix">
          <font-awesome-icon icon="dizzy" />
        </template>
        我是内容five
      </tab-item>
    </tabs>
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
