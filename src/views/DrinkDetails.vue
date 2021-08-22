<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title v-if="!isLoading"> {{ drink.strDrink }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isLoading">
      <base-spinner></base-spinner>
    </ion-content>
    <ion-content v-else :fullscreen="true">
        <base-card :drink="drink"></base-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
import axios from 'axios';
import baseCard from '@/components/baseCard.vue'
export default  {
  name: 'DrinkDetails',
  components: { baseCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton },
  data() {
    return {
      isLoading: false,
      drink: null,
      drinkId: this.$route.params.drinkId
    }
  },
  methods:{
    getDrink(){
      this.isLoading = true
      const ret = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.drinkId}`);
      ret.then(({data}) => {
        this.drink = data.drinks[0]
        this.isLoading = false
      })
    }
  },
  created(){
    this.getDrink()
  }
}
</script>
