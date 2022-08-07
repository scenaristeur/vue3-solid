import components from'./components'
import vue3_solid_store from './store/modules/vue3_solid_store'; // Vuex modals module
// import store from './store/index.js'

import * as sc from '@inrupt/solid-client-authn-browser'
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
        const component = components[prop]
        app.component(component.name, component)
      }
    }

    app.config.globalProperties.$showStore = async () => {
    console.log(options)

    }

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
      console.log("login", params.issuer)
      //options.store.commit('vue3_solid_store/setSession',"test")
        options.store.commit('vue3_solid_store/setSession', "login")
      // if (!sc.getDefaultSession().info.isLoggedIn) {
      //   await sc.login({
      //     oidcIssuer: params.issuer,
      //     redirectUrl: window.location.href,
      //     clientName: params.clientName
      //   });
      // }
    }


    app.config.globalProperties.$logout = async function(){
      // let session = sc.getDefaultSession()
      // await session.logout()
      // console.log("logout")
      options.store.commit('vue3_solid_store/setSession', "logout")
      // store.commit('solid/setPod', null)
      //store.dispatch('nodes/clearStore')
    }

  }
}

export default Vue3Solid
