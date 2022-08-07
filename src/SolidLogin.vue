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
    login(){
      this.logged = true
      //   this.$showStore()
      //   let params = {issuer : "https://solidcommunity.net", clientName: "My great App"}
      // let login_message = this.$login(params)
      // console.log(login_message)
      this.$store.commit('vue3_solid_store/setSession', "bhu")
      console.log("session",this.$store.state.vue3_solid_store.session)
    },
    logout(){
      this.logged = false
      this.$store.commit('vue3_solid_store/setSession', "none")
      console.log("session",this.$store.state.vue3_solid_store.session)
      // this.$logout()
    }
  },
  computed: {
    session() {
      return this.$store.state.vue3_solid_store.session
    }
  }

}
</script>
