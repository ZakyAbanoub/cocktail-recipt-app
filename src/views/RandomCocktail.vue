<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Your Lucky Drink </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isLoading">
      <base-spinner></base-spinner>
    </ion-content>
    <ion-content v-else :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="getRandomCocktail()">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

    <base-card :drink="randomCocktail"></base-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import axios from 'axios';
import baseCard from '@/components/baseCard.vue'
export default  {
  name: 'LuckyCocktail',
  components: { baseCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonRefresher, IonRefresherContent },
  data() {
    return {
      isLoading: false,
      randomCocktail: null
    }
  },
  methods:{
    getRandomCocktail(){
      this.isLoading = true
      const ret = axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      ret.then(({data}) => {
        this.randomCocktail = data.drinks[0]
        this.isLoading = false
      })
    }
  },
  created(){
    this.getRandomCocktail()
  }
}
</script>
