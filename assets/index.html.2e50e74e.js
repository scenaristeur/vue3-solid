import{_ as e,o as i,c as n,a as l}from"./app.81dd2229.js";const s={},t=l(`<h1 id="vue3-solid" tabindex="-1"><a class="header-anchor" href="#vue3-solid" aria-hidden="true">#</a> vue3-solid</h1><p>Here&#39;s a brief introduction.</p><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><p>$ npm install --save vue3-solid</p><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3><p><code>npm install --save vue3-solid</code></p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h3><p>see demo : https://github.com/scenaristeur/vue3-solid-demo</p><p>see doc : https://github.com/scenaristeur/vue3-solid-doc</p><p>src/main.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

import plugin from &#39;vue3-solid&#39;

createApp(App)
  .use(plugin)
  .mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/App.vue</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot;&gt;
  &lt;input-text /&gt;
  &lt;input-textarea /&gt;
  &lt;HelloWorld msg=&quot;Welcome to Your Vue.js App&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
import HelloWorld from &#39;./components/HelloWorld.vue&#39;

export default {
  name: &#39;App&#39;,
  components: {
    HelloWorld
  }
}
&lt;/script&gt;

&lt;style&gt;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives" aria-hidden="true">#</a> alternatives</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>...
&lt;template&gt;
  &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot;&gt;
  &lt;InputText /&gt;
  &lt;InputTextarea /&gt;
  &lt;HelloWorld msg=&quot;Welcome to Your Vue.js App&quot;/&gt;
&lt;/template&gt;
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>inspired by https://blog.logrocket.com/building-vue-3-component-library/</li><li>more at ? https://dev.to/siegerts/creating-a-vue-js-component-library-part-iv-documentation-with-vuepress-56h5</li></ul>`,16),a=[t];function d(r,v){return i(),n("div",null,a)}var o=e(s,[["render",d],["__file","index.html.vue"]]);export{o as default};
