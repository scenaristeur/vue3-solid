import components from'./components'

import * as sc from '@inrupt/solid-client-authn-browser'

const LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL = "solid_session_restore_url"

const plugin = {
  install (app) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        app.component(component.name, component)
      }
    }

    app.config.globalProperties.$checkSession = async () => {
      console.log("checksession")
      localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, window.location.toString())
      // // retrieve a nested property in `options`
      // // using `key` as the path
      // return key.split('.').reduce((o, i) => {
      //   if (o) return o[i]
      // }, options)

      sc.onSessionRestore((url) => {
        history.replaceState(null, "", url)
        console.log("onrestore", url)
      });


      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then((info) => {
        if(info.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${info.webId}]`)
          // store.commit('solid/setSession',info)
          let session = sc.getDefaultSession()
          // this.$getPodInfosFromSession(session)
          // This line is not reached until you are successfully logged in
          localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, "")
        }
      })
      // return "session"
    }

    app.config.globalProperties.$login = async function(params){
      console.log("login", params.issuer)
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: params.issuer,
          redirectUrl: window.location.href,
          clientName: params.clientName
        });
      }
    }


    app.config.globalProperties.$logout = async function(){
      let session = sc.getDefaultSession()
      await session.logout()
      console.log("logout")
      // store.commit('solid/setSession',null)
      // store.commit('solid/setPod', null)
      //store.dispatch('nodes/clearStore')
    }

  }
}

export default plugin
