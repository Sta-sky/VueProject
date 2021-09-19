<template lang="">
	<div>
		<Banner/>
		<!-- vue中借助router-link实现路由的切换 -->

		<!-- 开启replace模式  在浏览器历史记录中替换最上层的一条记录 -->
		<router-link :replace='true'  class="list-group-item" active-class='active' :to="{name:'guanyu'}">About</router-link>
		<router-link  replace class="list-group-item" active-class='active' to="/home">Home</router-link>
		<div class="demo">
			<router-view></router-view>
		</div>

	

		<!-- <div class="btnRegion">
			<h1>按钮区域</h1>
			<el-row>
				<el-button type='primary '>主要 </el-button>
				<el-button type='success'>成功 </el-button>
				<el-button type='info '>信息 </el-button>
				<el-button type='danger '>危险 </el-button>
				<el-button type='warning '>警告 </el-button>
				<el-button type='plain '>朴素 </el-button>
				<el-button >朴素 </el-button>
				<el-button >朴素 </el-button>
			</el-row>
		</div> -->

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
<style lang="css">
	.demo{
		width: 1000px;
		height: 300px;
	}
	.btnRegion{
		padding-left: 100px;
	}
	
</style>