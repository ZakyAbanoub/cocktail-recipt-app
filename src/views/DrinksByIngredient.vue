<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title> {{ ingredient }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isLoading">
      <base-spinner></base-spinner>
    </ion-content>
    <ion-content v-else :fullscreen="true">
        <ion-list>
            <ion-item v-for="drink in drinksList" :key="drink.idDrink" @click="$router.push(`/drink/${drink.idDrink}`)">
                <ion-avatar slot="end">
                    <img :src="drink.strDrinkThumb" alt="Drink Image">
                </ion-avatar>
                <ion-label>
                    <h2> {{ drink.strDrink }} </h2>
                </ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import axios from 'axios';
export default  {
  name: 'DrinksByIngredient',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonItem, IonAvatar, IonLabel },
  data() {
    return {
      isLoading: false,
      ingredient: this.$route.params.ingredient,
      drinksList: null
    }
  },
  methods:{
    searchDrinksByIngredient(){
      this.isLoading = true
      const ret = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.ingredient}`);
      ret.then(({data}) => {
        this.drinksList = data.drinks
        console.log(this.drinks)
        this.isLoading = false
      })
    }
  },
  created(){
    this.searchDrinksByIngredient()
  }
}
</script>
