<template>
    <ion-card>
        <img :src="drink.strDrinkThumb" :alt="drink.strDrinkThumb">
        <ion-card-header>
          <ion-card-subtitle>{{ drink.strCategory }}</ion-card-subtitle>
          <ion-card-title>{{ drink.strDrink }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          {{ drink.strInstructions }}
        </ion-card-content>
        <ion-list>
        <ion-list-header>Ingredients: </ion-list-header>

          <ion-item v-for="n in 15" :key="n" v-show="drink[`strIngredient${n}`]">
            <ion-label>
            <span v-if="drink[`strMeasure${n}`]"> {{drink[`strMeasure${n}`]}} </span>
            <span> {{drink[`strIngredient${n}`]}} </span>
            </ion-label>
          </ion-item>

        </ion-list>
    </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/vue';

export default {
    components:{ IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonListHeader, IonItem, IonLabel },
    props:{
        drink:{
            type: Object,
            required: true
        }
    }
}
</script>