<template lang="">
	<div>
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header"><h2>Vue Router Demo</h2></div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">

					<!-- vue中借助router-link实现路由的切换 -->
					<router-link  class="list-group-item" active-class='active' to="/about">About</router-link>
					<router-link  class="list-group-item" active-class='active' to="/home">Home</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!-- 通过router-view实现页面的切换 -->
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Home from './components/home'
	import About from './components/about'
	export default {
		name: 'App',
		components: {About, Home},
		data() {
			return {
				
				
			}
		},

		
	}
</script>
<style lang="">
	
</style>