# install
`npm install --save vue3-solid`

# usage

see demo : https://github.com/scenaristeur/vue3-solid-demo

see doc : https://github.com/scenaristeur/vue3-solid-doc

src/main.js
```
import { createApp } from 'vue'
import App from './App.vue'

import plugin from 'vue3-solid'

createApp(App)
  .use(plugin)
  .mount('#app')
```

src/App.vue

```
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <input-text />
  <input-textarea />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```




- inspired by https://blog.logrocket.com/building-vue-3-component-library/
- more at ? https://dev.to/siegerts/creating-a-vue-js-component-library-part-iv-documentation-with-vuepress-56h5
