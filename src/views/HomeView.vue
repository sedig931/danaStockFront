<template>
  <div class="home-container flex-row">
    <div class="inner-home-container flex-column">
      <div class="add-new-div flex-row">
        <div class="add-new-btn-div flex-row m-1" @click="this.addNewProduct">
          <i class="bi bi-plus-circle-dotted plus-icon flex-row"></i>
        </div>
        <div class="add-new-btn-div flex-row m-1" @click="this.popProduct">
          <i class="bi bi-dash-circle-dotted plus-icon flex-row"></i>
        </div>
      </div>
      <form class="sedig-form flex-row" @submit.prevent="this.getProduct">
      <div class="sku-input-btn-search flex-row">
        <input required type="text" class="sku-input" placeholder="sku" v-model="this.productSku">
        <button class="search-btn">search</button>
      </div>
      </form>
      <div class="product-place-lbl-div">
        <label class="product-place-lbl">{{ this.productPlace }}</label>
      </div>
    </div>
  </div>
</template>
<script>
  import { useRouter } from 'vue-router'
  import {getProduct} from '../module/pushProduct/addNewProduct.js';
  // const 
  export default {
  components: {},
  data() {
    return {
      router : useRouter(),
      products:[
        {sku:'YT-123456',place:'0 => 1 => 2'},
      ],
      productSku:'',
      productPlace:''
      //propreties
    };
  },
  methods: {
    checkActiveUser(){
      if(
        JSON.parse(localStorage.getItem('danaStock'))
      ) {
        if(JSON.parse(localStorage.getItem('danaStock')).loggedin){
          // console.log('goood !');
        } else this.$router.push({ name: 'login'});
      }
      else this.$router.push({ name: 'login'});
    },
    async getProduct(){
      try{
        if(this.productSku !== ''){        
        const item = await getProduct(this.productSku.toUpperCase());
        this.productPlace = item.place;
        // this.products.forEach((product,index) => {
        //   if(this.productSku.toLocaleUpperCase() === product.sku){
        //     this.productPlace = product.place
        //   }else {
        //     this.productPlace = 'not found or nedded to add...'
        //   }
        // }
        // );
        

      } else {
          this.productPlace = 'add sku first'
      }
      }catch(err){
        this.productPlace = 'error ! item not found or wrong...'
        console.log(err.message);
      }

    },
    addNewProduct(){
      // console.log('go to add new...');
      this.$router.push({ name: 'addNew'});
    },
    popProduct(){
      // console.log('pop this one..');
      this.$router.push({ name: 'remove'});
      
    }
  },
  mounted() {
    this.checkActiveUser();
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
.sku-input-btn-search{
  width: 90%;
  height: 25px;
  /* background-color: #818181; */
}
.home-container{
  height: 100vh;
  width: 100%;
  /* background-color: #555; */
}
.inner-home-container{
  height: 100%;
  width: 90%;
  max-height: 400px;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.sedig-form{
  width: 100%;
}
input[type="text"] {
  text-align: center;
  width: 150px;
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
  border: 1px solid #3aa3e5;
}
.search-btn{
  border: none;
  background-color: #3aa3e5;
  border-radius: 5px;
  height: 25px;
  width: 60px;
  color: white;
  margin: 0 0 0 10px;
  cursor: pointer;
  font-size: 11px;
}
.product-place-lbl-div{
  margin: 0;
}
.product-place-lbl{
  margin: 20px;
  font-size: 12px;
  color: #474747;
}
.add-new-div{
  width: 100%;
  /* height: 20px; */
  /* background-color: #474747; */
  margin: 0 0 20px 0;
}
.add-new-btn-div{
  height: 20px;
  width: 20px;
  background-color: #e6e6e6;
  border-radius: 50%;
  font-size: 17px;
  cursor: pointer;
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
