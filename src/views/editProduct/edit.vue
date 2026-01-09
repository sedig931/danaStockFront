<template>
    <div class="add-new-container flex-row">
        <div class="inner-add-new-container flex-column">
          <div class="back-home-div flex-row" @click="this.goBack">
            <i class="bi bi-chevron-left goleft-icon flex-row"></i>
          </div>
          <form class="sedig-form flex-column" @submit.prevent="this.editProduct">
            <div class="sku-input-btn-add flex-row">
                <input required type="text" class="sku-input" placeholder="sku" v-model="this.productSku">
            </div>
            <div class="sku-input-btn-add flex-row">
                <input required type="text" class="sku-input" placeholder="place" v-model="this.productPlace">
            </div>
            <div class="lbl-div flex-row">
              <label for="" :class="this.lbltxt.includes('error') ? 'lbl-not-success' : 'lbl-success'">{{this.lbltxt}}</label>
            </div>
            <div class="sku-input-btn-add flex-row">
                <button class="add-btn">save</button>
            </div>
          </form>
        </div>
    </div>
</template>
<script>
  import { useRouter } from 'vue-router'
  import {editProduct} from '../../module/pushProduct/addNewProduct.js';
export default {
  components: {},
  data() {
    return {
        router : useRouter(),
        productSku:'',
        productPlace:'',
        lbltxt:'',
      //propreties
    };
  },
  methods: {
    async editProduct(){
      try{
        await editProduct({sku : this.productSku.toUpperCase(), place : this.productPlace});
        this.lbltxt = 'successfully edit';
        setTimeout(()=>{
            this.$router.push({name: "home", params:{sku:this.productSku, place:this.productPlace}})
        },1000);
      }catch(err){
        // console.log(err);
        this.lbltxt = 'sorry there is error...';
      }
    },
    goBack(){
      this.$router.push({ name: 'home'});
    }
  },
  mounted() {
    this.productSku = this.$route.params.sku;
    this.productPlace = this.$route.params.place
  },
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
.inner-add-new-container{
  position: relative;
  height: 100%;
  width: 90%;
  max-height: 400px;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.add-new-container{
    height: 100vh;
    width: 100%;
}
.sedig-form{
  width: 100%;
}
input[type="text"] {
    text-align: center;
  width: 180px;
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
.add-btn{
  border: none;
  background-color: #3aa3e5;
  border-radius: 5px;
  height: 22px;
  width: 60px;
  color: white;
  margin: 10px 0 10px 0;
  cursor: pointer;
  font-size: 11px;
}
.back-home-div{
  position: absolute;
  justify-content: start;
  left: 15px;
  top: 15px;
  height: 20px;
  width: 300px;
  /* background-color: #f38f8f; */
  font-size: 17px;
  font-weight: bold;
  color: #474747;
  cursor: pointer;
}
.lbl-div{
  width: 100%;
  font-size: 12px;
}
.lbl-success{
  color: rgb(51, 175, 51);
}
.lbl-not-success{
  color: rgb(209, 20, 20);
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