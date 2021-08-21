<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Your Lucky Drink </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isLoading">
      <div class="loading-content">
      <ion-spinner name="dots"></ion-spinner>
      </div>
    </ion-content>
    <ion-content v-else :fullscreen="true">
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

          <ion-item v-for="n in 15" :key="n" v-show="randomCocktail['strIngredient' + n]">
            <ion-label>
            <span v-if="randomCocktail['strMeasure' + n]"> {{ `${randomCocktail['strMeasure' + n]} ` }} </span>
            <span> {{ `${randomCocktail['strIngredient' + n]}` }} </span>
            </ion-label>
          </ion-item>

        </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/vue';
import axios from 'axios';
export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSpinner, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonListHeader, IonItem, IonLabel },
  data() {
    return {
      isLoading: true,
      randomCocktail: null
    }
  },
  methods:{
    getRandomCocktail(){
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

<style>
.loading-content{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>