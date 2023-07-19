import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
// import ProductsList from '../views/ProductsList'
import ProductCategories from '../views/ProductCategories'
import EdibleProducts from '../views/EdibleProducts'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/comestibles',
		name: 'EdibleProducts',
		component: EdibleProducts

	},
	{
		path: '/product-categories',
		name: 'ProductCategories',
		component: ProductCategories
	}]

})

export default router