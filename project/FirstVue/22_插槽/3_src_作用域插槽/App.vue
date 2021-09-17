<template>
	<div class="container">
		<Category title='游戏'>
			<!-- 原生写法  dataInfo  dataInfo.game-->
			<template scope='dataInfo'>
				<ul>
					<li v-for='(data, index) in dataInfo.game' :key="index">{{data}}</li>
				</ul>
			</template>
		</Category>

		<Category title='游戏'>
			

			<!--  结构赋值 ES6语法 {game} -->
			<template scope="{game}">
				<ol>
					<li  v-for='(data, index) in game' :key="index">{{data}}</li>
				</ol>
			</template>

		</Category>
		<Category title='游戏'>

			<template scope="game">
				<h5>
					<li  v-for='(data, index) in game.game' :key="index">{{data}}</li>
				</h5>
			</template>

		</Category>
	</div>
		
</template>
<script>
	import Category from './components/category'
	export default {
		name:'App',
		data() {
			return {

			}
		},
		components: {
			Category
		},
	
	}

</script>

<style scoped>
	h4{
		text-align: center;
	}
	.container, .game, .movie{
		display: flex;
		justify-content: space-around;
	}
	video{

		width: 100%;
	}

	img{
		width: 100%;
	}

	button{
		background-color: skyblue;
		font-size: 20px;
		margin-top: 10px;
		height: 35px;
	}

	input{
		width: 300px;
		height: 25px;
		background-color: thistle;
	}

	.stu-enter-active{
		animation: student 0.5s;
	}
	.stu-leave-active{
		animation: student 0.5s reverse;
	}

	@keyframes student{
		from {
			transform: translateX(100%);
		}
		to{
			transform: translateX(0);
		}
	}
</style>
