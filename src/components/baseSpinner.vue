<template>
      <div class="loading-content">
        <ion-spinner name="dots"></ion-spinner>
      </div>
</template>

<script>
import { IonSpinner } from '@ionic/vue';
export default {
    components:{
        IonSpinner
    }
}
</script>

<style scoped>
.loading-content{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

ion-spinner{
  transform: scale(4);
}
</style>