import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [{
        path: '/',
        redirect: '/tabs/lucky-cocktail'
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [{
                path: '',
                redirect: '/tabs/lucky-cocktail'
            },
            {
                path: 'lucky-cocktail',
                component: () =>
                    import ('@/views/RandomCocktail.vue')
            },
            {
                path: 'by-ingredients',
                component: () =>
                    import ('@/views/SearchByIngredient.vue')
            },
            {
                path: 'search-drink',
                component: () =>
                    import ('@/views/SearchDrink.vue')
            }
        ]
    },
    {
        path: '/drinks-by-ingredient/:ingredient',
        component: () =>
            import ('@/views/DrinksByIngredient.vue')
    },
    {
        path: '/drink/:drinkId',
        component: () =>
            import ('@/views/DrinkDetails.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router