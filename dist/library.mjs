import { openBlock, createElementBlock, resolveComponent, createCommentVNode, createVNode, withCtx, createElementVNode, createTextVNode } from 'vue';
import * as sc from '@inrupt/solid-client-authn-browser';

var script$2 = {
  name: 'InputText'
};

const _hoisted_1$1 = { type: "text" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

script$2.render = render$2;
script$2.__file = "src/InputText.vue";

var script$1 = {
  name: 'InputTextarea'
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script$1.render = render$1;
script$1.__file = "src/InputTextarea.vue";

var script = {
  name: "SolidLogin",
  data() {
    return {
      issuers: [
        { value: "https://solidcommunity.net", text: 'SolidCommunity.net (NSS)' },
        { value: "https://solidweb.org", text: 'Solidweb.org (NSS)' },
        { value: 'https://solidweb.me/', text: 'Solidweb.me (CSS)'},
        { value: "https://broker.pod.inrupt.com", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },
        { value: "https://inrupt.net", text: 'Inrupt.net (NSS)' },
        { value: "https://dev.inrupt.net", text: 'dev.inrupt.net (NSS)' },
        { value: "https://trinpod.us/", text: 'Trinpod.us (hs ?)'},
        { value: "other", text: 'Autre / Other' },
      ],
      issuer: null,
      restore: true,
      other: ""
    }
  },
  methods:{
    onInput(){
      console.log("input", this.other);
    },
    onChange(){
      console.log("change", this.other);
      if (this.other != undefined && this.other.length != undefined)  {
        this.issuer = this.other;
        this.login(this.issuer);
      }
    },
    login(issuer){
      console.log(issuer);
      this.issuer = issuer;
      if (this.issuer != null && this.issuer != "other"){
        console.log(this.issuer);
        this.$login({issuer: this.issuer, clientName: "TestApp"});
      }
    },
    logout(){
      this.$logout();
    }
  },
  computed:{
    session:{
      get () { return this.$store.state.solid.session },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    state() {
      return this.other.startsWith('http')
    },
    invalidFeedback() {
      if (this.other.length> 0 && !this.other.startsWith('http')) {
        return "the url of your pod provider should start with `http`"
      }
      return "the url of your pod provider, not your webId ! "
    }
  }
};

const _hoisted_1 = { class: "login" };
const _hoisted_2 = {
  key: 0,
  class: "d-flex align-items-center"
};
const _hoisted_3 = /*#__PURE__*/createTextVNode("-- Login / Connexion --");
const _hoisted_4 = { key: 0 };
const _hoisted_5 = /*#__PURE__*/createTextVNode("Login / connexion");
const _hoisted_6 = {
  key: 1,
  class: "d-flex align-items-center"
};
const _hoisted_7 = /*#__PURE__*/createTextVNode("Logout");
const _hoisted_8 = ["href"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_form_select_option = resolveComponent("b-form-select-option");
  const _component_b_form_select = resolveComponent("b-form-select");
  const _component_b_form_input = resolveComponent("b-form-input");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_b_button = resolveComponent("b-button");

  return (openBlock(), createElementBlock("span", _hoisted_1, [
    createCommentVNode(" <b-icon-person-circle></b-icon-person-circle> "),
    ($options.session == null || $options.session.isLoggedIn == false)
      ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_b_form_group, null, {
            default: withCtx(() => [
              createCommentVNode(" <b-dropdown id=\"dropdown-login\"\n        text=\"Login\"\n        class=\"m-md-2\"\n        size=\"sm\"\n        variant=\"success\">\n        <b-dropdown-item v-for=\"issuer in issuers\" :key=\"issuer.value\" @click=\"login(issuer.value)\">\n        {{issuer.text}}\n      </b-dropdown-item>\n    </b-dropdown> "),
              createVNode(_component_b_form_select, {
                autofocus: "",
                size: "sm",
                modelValue: $data.issuer,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.issuer) = $event)),
                options: $data.issuers,
                onChange: $options.login
              }, {
                first: withCtx(() => [
                  createVNode(_component_b_form_select_option, {
                    value: null,
                    disabled: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_3
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["modelValue", "options", "onChange"]),
              ($data.issuer == 'other')
                ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createVNode(_component_b_form_group, {
                      id: "fieldset-1",
                      description: "ex: `https://solidcommunity.net`",
                      label: "url of your pod provider",
                      "label-for": "input-1",
                      "valid-feedback": "Thxs!",
                      "invalid-feedback": $options.invalidFeedback,
                      state: $options.state
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_form_input, {
                          id: "input-1",
                          modelValue: $data.other,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.other) = $event)),
                          state: $options.state,
                          onChange: $options.onChange,
                          trim: ""
                        }, null, 8 /* PROPS */, ["modelValue", "state", "onChange"])
                      ]),
                      _: 1 /* STABLE */
                    }, 8 /* PROPS */, ["invalid-feedback", "state"]),
                    createVNode(_component_b_button, {
                      size: "sm",
                      variant: "info"
                    }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 1 /* STABLE */
                    })
                  ]))
                : createCommentVNode("v-if", true)
            ]),
            _: 1 /* STABLE */
          })
        ]))
      : (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(_component_b_button, {
            onClick: $options.logout,
            variant: "outline-danger",
            size: "sm"
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]),
          createElementVNode("a", {
            href: $options.session.webId,
            target: "_blank"
          }, "pod", 8 /* PROPS */, _hoisted_8)
        ]))
  ]))
}

script.render = render;
script.__file = "src/SolidLogin.vue";

var components = { SolidLogin: script, InputTextarea: script$1, InputText: script$2 };

const LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL = "solid_session_restore_url";

const plugin = {
  install (app) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        app.component(component.name, component);
      }
    }

    app.config.globalProperties.$checkSession = async () => {
      console.log("checksession");
      localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, window.location.toString());
      // // retrieve a nested property in `options`
      // // using `key` as the path
      // return key.split('.').reduce((o, i) => {
      //   if (o) return o[i]
      // }, options)

      sc.onSessionRestore((url) => {
        history.replaceState(null, "", url);
        console.log("onrestore", url);
      });


      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then((info) => {
        if(info.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${info.webId}]`);
          // store.commit('solid/setSession',info)
          sc.getDefaultSession();
          // this.$getPodInfosFromSession(session)
          // This line is not reached until you are successfully logged in
          localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, "");
        }
      });
      // return "session"
    };

    app.config.globalProperties.$login = async function(params){
      console.log("login", params.issuer);
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: params.issuer,
          redirectUrl: window.location.href,
          clientName: params.clientName
        });
      }
    };


    app.config.globalProperties.$logout = async function(){
      let session = sc.getDefaultSession();
      await session.logout();
      console.log("logout");
      // store.commit('solid/setSession',null)
      // store.commit('solid/setPod', null)
      //store.dispatch('nodes/clearStore')
    };

  }
};

export { plugin as default };
