<template>
	<h2>Lista de productos</h2>
	<!-- <ProductsTable /> -->
	<table border="1">
		<thead>
			<th>Id</th>
			<th>Nombre</th>
			<th>Precio</th>
			<th>Categoria</th>
			<th>Imagen</th>
		</thead>
		<tr v-for="product in products" :key="product">
			<td>{{product.id}}</td>
			<td>{{product.title}}</td>
			<td>{{product.price}}</td>
			<td>{{product.category}}</td>
			<td><img :src=product.image style="width: 75px"></td>
		</tr>
	</table>
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