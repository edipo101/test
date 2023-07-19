import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
// import ProductsList from '../views/ProductsList'
import ProductCategories from '../views/ProductCategories'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/product-categories',
		name: 'ProductCategories',
		component: ProductCategories
	}]

})

export default router