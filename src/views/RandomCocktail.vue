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
      <ion-card>
        <img :src="randomCocktail.strDrinkThumb" :alt="randomCocktail.strDrinkThumb">
        <ion-card-header>
          <ion-card-subtitle>{{ randomCocktail.strCategory }}</ion-card-subtitle>
          <ion-card-title>{{ randomCocktail.strDrink }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          {{ randomCocktail.strInstructions }}
        </ion-card-content>
        <ion-list>
        <ion-list-header>Ingredients: </ion-list-header>

          <ion-item v-for="n in 15" :key="n" v-show="randomCocktail[`strIngredient${n}`]">
            <ion-label>
            <span v-if="randomCocktail[`strMeasure${n}`]"> {{randomCocktail[`strMeasure${n}`]}} </span>
            <span> {{randomCocktail[`strIngredient${n}`]}} </span>
            </ion-label>
          </ion-item>

        </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonListHeader, IonItem, IonLabel, IonRefresher, IonRefresherContent } from '@ionic/vue';
import axios from 'axios';
export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonListHeader, IonItem, IonLabel, IonRefresher, IonRefresherContent },
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
