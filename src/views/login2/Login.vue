<template>
  <div class="login-page-container flex-row">
    <div class="login-input-container flex-column">
      <div class="lbl-input-div flex-row">
        <label class="login-lbl">user-name</label>
        <input type="text" v-model="this.userName">
      </div>
      <div class="lbl-input-div flex-row">
        <label class="login-lbl" >password</label>
        <input class="password-txt" type="password" v-model="this.password">
      </div>
      <div class="login-btn-div">
        <button class="login-btn" @click="this.checkLogin">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  components: {},
  data() {
    return {
      router : useRouter(),
      userName:'sedig931',
      password:'123456',
      //propreties
    };
  },
  methods: {
    checkLogin(){
      if(this.userName === 'sedig931' && this.password === '123456'){
        // console.log('go to home page..');
        localStorage.setItem('danaStock',JSON.stringify({loggedin : true}) )
        this.$router.push({ name: 'home'});

      }
    }
  },
  mounted() {},
};
</script>
<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-page-container{
  height: 100vh;
  width: 100%;
}
.login-input-container{
  height: 90%;
  width: 90%;
  max-width: 400px;
  max-height: 600px;
  min-height: 400px;
  border-radius: 10px;
  border:1px solid rgb(213, 213, 213)
}
.lbl-input-div{
  /* background-color: #368185; */
  width: 100%;
  justify-content: space-evenly;
}
.login-lbl{
  font-size: 16px;
  color: #474747;
}
.login-btn{
  height: 25px;
  width: 170px;
  margin-top: 20px;
  border-radius: 7px;
  border: none;
  color: white;
  background-color: #474747;
  cursor: pointer;
}
input[type="text"] {
  width: 220px;
  height: 25px;
  border-radius: 8px;
  padding: 5px;
  font-size: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input[type="text"]:focus {
  border: 1px solid #555;
}
input[type="password"] {
  width: 220px;
  height: 25px;
  border-radius: 8px;
  padding: 5px;
  font-size: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input[type="password"]:focus {
  border: 1px solid #555;
}
.back-to-me{
  flex-wrap: wrap;
  overflow: hidden;
  transform: translateY(-15px);
  transform: rotate(-40deg) scale(1);
  background-image: linear-gradient(to top, #f38f8f, #fdeead);
  filter: drop-shadow(10px 10px 5px #818181);
  box-shadow: 0 3px 10px rgb(213, 213, 213);
  font-family: "Almarai";
  background-color: #368185;
  backdrop-filter: blur(2px);
}
</style>