<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/lucky-cocktail">
          <ion-icon :icon="repeatOutline" />
          <ion-label>Lucky Cocktail</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/by-ingredients">
          <ion-icon :icon="beerOutline" />
          <ion-label>By Ingredient</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/search-drink">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { search, beerOutline, repeatOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data() {
    return {
      search,
      beerOutline,
      repeatOutline
    }
  },
}
</script>