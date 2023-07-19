<template>
	<header>
		<h2 class="h1">Categorias comestibles</h2>
	</header>

	<div class="woocommerce columns-4">
		<ul class="product-loop-categories">			
			<li v-for="product in products" :key="product" class="product-category product">
				<a href="#">
					<!-- <img src="assets/images/product-category/7.jpg" alt="Accessories" width="250" height="232"> -->
					<img :src=product.image style="height: 232px">
					<h3>{{product.title}} <mark class="count">(2)</mark></h3>
				</a>
			</li>			
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		// name: 'ProductsTable',
		data () {
			return {
				products: []
			}
		},
		created() {
			axios
			.get('https://fakestoreapi.com/products')
			.then((response) => {
				this.products = response.data
			})
		}
	}
</script>