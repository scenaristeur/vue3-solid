'use strict';

var vue = require('vue');
require('@inrupt/solid-client-authn-browser');

var script$3 = {
  name: 'InputText'
};

const _hoisted_1$2 = { type: "text" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$2))
}

script$3.render = render$3;
script$3.__file = "src/InputText.vue";

var script$2 = {
  name: 'InputTextName'
};

const _hoisted_1$1 = { type: "text" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$2.render = render$2;
script$2.__file = "src/InputTextName.vue";

var script$1 = {
  name: 'InputTextarea'
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
}

script$1.render = render$1;
script$1.__file = "src/InputTextarea.vue";

var script = {
  name: 'SolidLogin',
  data(){
    return {
      logged : false
    }
  },
  created(){
    //this.$checkSession()
    this.$showStore();
  },
  methods:{
    async login(){
      // this.logged = true
      //   this.$showStore()
        let params = {issuer : "https://solidcommunity.net", clientName: "My great App"};
      let login_message = await this.$login(params);
      console.log(login_message);

      // console.log("session",this.$store.state.vue3_solid_store.session)
    },
    async logout(){
      // this.logged = false
      // this.$store.commit('vue3_solid_store/setSession', "none")
      // console.log("session",this.$store.state.vue3_solid_store.session)
      await this.$logout();
    }
  },
  watch:{
    session(){
      console.log("session watch",this.session);
      if (this.session == "login"){
        this.logged = true;
      }
      if (this.session == "logout"){
        this.logged = false;
      }
    }
  },
  computed: {
    session() {
      return this.$store.state.vue3_solid_store.session
    }
  }

};

const _hoisted_1 = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/vue.createTextVNode(" htf ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    _hoisted_1,
    vue.createTextVNode(" session --" + vue.toDisplayString($options.session) + "-- fin se ", 1 /* TEXT */),
    _hoisted_2,
    _hoisted_3,
    ($data.logged==false)
      ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.login && $options.login(...args)))
        }, "Login"))
      : (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.logout && $options.logout(...args)))
        }, "Logout"))
  ]))
}

script.render = render;
script.__file = "src/SolidLogin.vue";

var components = {
  SolidLogin: script,
  InputTextarea: script$1,
  InputText: script$3,
  InputTextName: script$2
};

const state = () => ({
  // doc: null
  session: "sip session ",
  pod: null
});

const mutations = {
  setSession(state, s){
    console.log("session",s);
    state.session = s;
  },
  setPod(state, p){
    console.log("pod",p);
    state.pod = p;
  },
  // updateDoc(state, newDoc) {
  //   state.doc = newDoc
  //   //render(newDoc)
  // },

};

const actions = {
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
};

var vue3_solid_store = {
  namespaced: true,
  state,
  actions,
  mutations
};

//
// const LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL = "solid_session_restore_url"

const Vue3Solid = {
  install (app, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.');
    }

    // Register modals vuex module
    options.store.registerModule('vue3_solid_store', vue3_solid_store);
    //let store = options.store
    // console.log("store",store)

    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        app.component(component.name, component);
      }
    }

    app.config.globalProperties.$showStore = async () => {
    console.log(options);

    };

    // app.config.globalProperties.$checkSession = async () => {
    //   console.log("checksession")
    //   localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, window.location.toString())
    //   // // retrieve a nested property in `options`
    //   // // using `key` as the path
    //   // return key.split('.').reduce((o, i) => {
    //   //   if (o) return o[i]
    //   // }, options)
    //
    //   sc.onSessionRestore((url) => {
    //     history.replaceState(null, "", url)
    //     console.log("onrestore", url)
    //   });
    //
    //
    //   await sc.handleIncomingRedirect({
    //     restorePreviousSession: true
    //   }).then((info) => {
    //     if(info.isLoggedIn ==  true){
    //       console.log(`Logged in with WebID [${info.webId}]`)
    //     //  store.commit('vue3_solid_store/setSession',info)
    //       let session = sc.getDefaultSession()
    //       // this.$getPodInfosFromSession(session)
    //       // This line is not reached until you are successfully logged in
    //       localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, "")
    //     }
    //   })
    //   // return "session"
    // }
    //
    app.config.globalProperties.$login = async function(params){
      console.log("login", params.issuer);
      //options.store.commit('vue3_solid_store/setSession',"test")
        options.store.commit('vue3_solid_store/setSession', "login");
      // if (!sc.getDefaultSession().info.isLoggedIn) {
      //   await sc.login({
      //     oidcIssuer: params.issuer,
      //     redirectUrl: window.location.href,
      //     clientName: params.clientName
      //   });
      // }
    };


    app.config.globalProperties.$logout = async function(){
      // let session = sc.getDefaultSession()
      // await session.logout()
      // console.log("logout")
      options.store.commit('vue3_solid_store/setSession', "logout");
      // store.commit('solid/setPod', null)
      //store.dispatch('nodes/clearStore')
    };

  }
};

module.exports = Vue3Solid;
