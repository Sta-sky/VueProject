<template>
	<div class="container">
		<Search/></Search>
		<UserList/>
	</div>
		

</template>

<script>
	import axios from 'axios'
	import Search from './components/search'
	import UserList from './components/userList'
	export default {
		name:'App',
		components: {
			Search,
			UserList
		},
	
	}

</script>

<style>
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
