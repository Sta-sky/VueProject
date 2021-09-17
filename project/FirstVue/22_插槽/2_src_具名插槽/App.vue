<template>
	<div class="container">
		<Category title='美食'>
			<img slot="header" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>
		
		<Category title='游戏'>
			<ul slot="header">
				<li  v-for='(data, index) in games' :key="index">{{data}}</li>
			</ul>
			<div  slot="footer"class="game">
				<a  href="" >单机游戏</a> 
				<a slot="footer" href="">网络游戏</a>
			</div>


		</Category>

		<Category title='电影'>
			<video slot="header" controls class="video" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template v-slot:footer>
				<div  class="movie">
					<a  href="" >国产</a> 
					<a  href="" >经典</a> 
					<a  href="" >欧美</a> 
				</div>
				<h4>欢迎前来观看影片</h4>
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
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
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
