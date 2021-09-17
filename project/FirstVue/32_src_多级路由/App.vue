<template lang="">
	<div>
		<div class="row">
			<Banner/>
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
	import Banner from './components/banner'
	export default {
		name: 'App',
		components: {Banner},
		data() {
			return {
				
				
			}
		},

		
	}
</script>
<style lang="">
	
</style>