import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
import ProductsList from '../views/ProductsList'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/products',
		name: 'ProductsList',
		component: ProductsList
	}]

})

export default router