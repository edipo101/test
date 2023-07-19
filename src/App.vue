<template>
	<div id="page" class="hfeed site">
		<a class="skip-link screen-reader-text" href="#site-navigation">Skip to navigation</a>
		<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

		<div class="top-bar">
			<div class="container">
				<nav>
					<ul id="menu-top-bar-left" class="nav nav-inline pull-left animate-dropdown flip">
						<li class="menu-item animate-dropdown"><a title="Welcome to Worldwide Electronics Store" href="#">Bienvenido a la Tienda Anime Akatsuki</a></li>
					</ul>
				</nav>

				<nav>
					<ul id="menu-top-bar-right" class="nav nav-inline pull-right animate-dropdown flip">
						<li class="menu-item animate-dropdown"><a title="Store Locator" href="#"><i class="ec ec-map-pointer"></i>Store Locator</a></li>
						<li class="menu-item animate-dropdown"><a title="Track Your Order" href="track-your-order.html"><i class="ec ec-transport"></i>Track Your Order</a></li>
						<li class="menu-item animate-dropdown"><a title="Shop" href="shop.html"><i class="ec ec-shopping-bag"></i>Shop</a></li>
						<li class="menu-item animate-dropdown"><a title="My Account" href="my-account.html"><i class="ec ec-user"></i>My Account</a></li>
					</ul>
				</nav>
			</div>
		</div><!-- /.top-bar -->

		<TheHeader /> 
		
		<SearchBar /> <!-- Barra de búsqueda -->

		<div id="content" class="site-content" tabindex="-1">
			<div class="container">

				<nav class="woocommerce-breadcrumb"><a href="home.html">Home</a><span class="delimiter"><i class="fa fa-angle-right"></i></span>Laptops &amp; Computers</nav>

				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<section>														
							<router-view v-slot="{Component}">
								<keep-alive>
									<component :is="Component" /> 
								</keep-alive>
							</router-view>
						</section>
					</main><!-- #main -->
				</div><!-- #primary -->
			</div><!-- .container -->
		</div>

		

		<TheFooter />

	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader'
	import SearchBar from '@/components/SearchBar'
	import TheFooter from '@/components/TheFooter'

	export default {
		data () {
			return {

			}
		},
		components: {
			TheHeader,
			SearchBar,
			TheFooter
		}
	}
</script>