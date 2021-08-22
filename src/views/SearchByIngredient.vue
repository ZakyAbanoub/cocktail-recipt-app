<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search By Ingredients</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isLoading">
      <base-spinner></base-spinner>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
      <ion-list>
        <ion-item v-for="ingredient in ingredientsList" :key="ingredient.strIngredient1" @click="router.push(`drinks-by-igredient/${ingredient.strIngredient1}`)">
          <ion-avatar slot="start">
            <img :src="ingredientThumb(ingredient.strIngredient1)" />
          </ion-avatar>
          <ion-label>
            <h2>{{ingredient.strIngredient1}}</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonList, IonItem } from '@ionic/vue';
import axios from 'axios'

export default  {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonAvatar, IonLabel, IonList, IonItem },
  data() {
    return {
      isLoading: false,
      ingredientsList: null
    }
  },
  methods:{
    searchIngredients(){
      this.isLoading = true
      const ret = axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      ret.then(({data}) => {
        this.ingredientsList = data.drinks
        this.isLoading = false
        this.ingredientsList = this.ingredientsList.sort( function(a,b) {
          return a.strIngredient1.localeCompare(b.strIngredient1);
        })
        console.log(this.ingredientsList)
      })
    },
    ingredientThumb(ingredient){
      return `https://www.thecocktaildb.com/images/ingredients/${encodeURI(ingredient)}-Small.png`
    }
  },
  created(){
    this.searchIngredients()
  }
}
</script>