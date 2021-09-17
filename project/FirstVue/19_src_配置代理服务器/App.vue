<template>
	<div>
		<h1>服务器返回的学生信息</h1>
		<transition-group
			appear 
			name='stu'
		>
			<ul v-for='info of students' :key="info.id">
				<li>学生姓名： {{info.name}}</li>
				<li>学生年龄： {{info.age}}</li>
			</ul>
		</transition-group>
		<button @click=getStudent>获取学生信息</button>
		<hr>
		<h1>服务器返回的汽车新信息</h1>
		<transition-group
			appear 
			name='stu'
		>
			<ul v-for='car of cars' :key="car.id">
				<li>学生姓名： {{car.name}}</li>
				<li>学生年龄： {{car.price}}</li>
			</ul>
		</transition-group>
		<button @click=getCars>获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		data() {
			return {
				students:[],
				cars:[],
				num: Math.random()*10000+1
			}
		},
		computed:{
			randoms(){
				return this.num
			}
		},
		methods: {
			getStudent(){
				axios.get('http://localhost:8080/v1/students').then(
					response =>{
						this.students = response.data
						console.log('请求成功了', response.data)
					},
					error=>{
						console.log('请求失败了', error.message)
					}
				)
			},

			getCars(){
				axios.get('http://localhost:8080/v2/cars').then(
					response=>{
						this.cars = response.data
					},
					error=>{
						console.log('请求失败了', error.message)
					}
				)
			}
		}
	}

</script>

<style>
	button{
		background-color: skyblue;
		font-size: 20px;
	}

	ul{
		border-radius: 5px;
		padding: 10px;
		background-color: lightblue;
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
