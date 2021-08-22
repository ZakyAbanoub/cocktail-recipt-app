<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar debounce="500"  :onIonChange="(e) => searchDrinks(e.detail.value)"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isLoading">
      <base-spinner></base-spinner>
    </ion-content>
    <ion-content v-else :fullscreen="true">
      <div v-if="!areThereDrinks" class="center">
        <ion-label> Please Search Above. </ion-label>
      </div>
      <div v-else>
        <div class="center par">
          <ion-label> There are {{ drinksList.length }} Cocktails with this name </ion-label>
        </div>
        <base-card v-for="drink in drinksList" :key="drink.idDrink" :drink="drink"></base-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonLabel } from '@ionic/vue';
import axios from 'axios'
import baseCard from '@/components/baseCard.vue'

export default  {
  name: 'SearchDrink',
  components: { baseCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonLabel },
  data() {
    return {
      isLoading: false,
      drinksList: [],
      areThereDrinks: false
    }
  },
  methods:{
    searchDrinks(drinkName){
      if(!drinkName){
        this.drinksList = []
        this.areThereDrinks = false
        return;
      }
      this.isLoading = true
      const ret = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`);
      ret.then(({data}) => {
        if(data.drinks && data.drinks.length){
          this.areThereDrinks = true
          this.drinksList = data.drinks
        } else {
          this.areThereDrinks = false
        }
        this.isLoading = false
      })
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.par{
  padding-top: 20px;
}
</style>