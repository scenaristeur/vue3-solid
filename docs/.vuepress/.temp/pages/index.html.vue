<template><div><h1 id="vue3-solid" tabindex="-1"><a class="header-anchor" href="#vue3-solid" aria-hidden="true">#</a> vue3-solid</h1>
<p>Here's a brief introduction.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<p>$ npm install --save vue3-solid</p>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3>
<p><code v-pre>npm install --save vue3-solid</code></p>
<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h3>
<p><a href="https://github.com/scenaristeur/vue3-solid-demo" target="_blank" rel="noopener noreferrer">demo<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/scenaristeur/vue3-solid-doc" target="_blank" rel="noopener noreferrer">doc<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/scenaristeur/vue3-solid" target="_blank" rel="noopener noreferrer">source<ExternalLinkIcon/></a></p>
<p>src/main.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { createApp } from 'vue'
import App from './App.vue'

import plugin from 'vue3-solid'

createApp(App)
  .use(plugin)
  .mount('#app')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/App.vue</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;img alt="Vue logo" src="./assets/logo.png">
  &lt;input-text />
  &lt;input-textarea />
  &lt;HelloWorld msg="Welcome to Your Vue.js App"/>
&lt;/template>

&lt;script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
&lt;/script>

&lt;style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
&lt;/style>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives" aria-hidden="true">#</a> alternatives</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>...
&lt;template>
  &lt;img alt="Vue logo" src="./assets/logo.png">
  &lt;InputText />
  &lt;InputTextarea />
  &lt;HelloWorld msg="Welcome to Your Vue.js App"/>
&lt;/template>
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>inspired by https://blog.logrocket.com/building-vue-3-component-library/</li>
<li>more at ? https://dev.to/siegerts/creating-a-vue-js-component-library-part-iv-documentation-with-vuepress-56h5</li>
</ul>
</div></template>
