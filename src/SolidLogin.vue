<template>
  <div>
    <br>

    session  --{{session}}-- fin se
    <br>
    htf
    <button v-if="logged==false" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'SolidLogin',
  data(){
    return {
      logged : false
    }
  },
  created(){
    //this.$checkSession()
    this.$showStore()
  },
  methods:{
    async login(){
      // this.logged = true
      //   this.$showStore()
        let params = {issuer : "https://solidcommunity.net", clientName: "My great App"}
      let login_message = await this.$login(params)
      console.log(login_message)

      // console.log("session",this.$store.state.vue3_solid_store.session)
    },
    async logout(){
      // this.logged = false
      // this.$store.commit('vue3_solid_store/setSession', "none")
      // console.log("session",this.$store.state.vue3_solid_store.session)
      await this.$logout()
    }
  },
  watch:{
    session(){
      console.log("session watch",this.session)
      if (this.session == "login"){
        this.logged = true
      }
      if (this.session == "logout"){
        this.logged = false
      }
    }
  },
  computed: {
    session() {
      return this.$store.state.vue3_solid_store.session
    }
  }

}
</script>
