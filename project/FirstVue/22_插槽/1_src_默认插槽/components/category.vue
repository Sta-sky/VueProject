<template lang="">
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Category',
        data() {
            return {
            }
        },
        props: ['title']
    }
</script>
<style lang="css">
    .category{

        width: 200px;
        height: 300px;
        background-color: skyblue;
    }

    h3{
        text-align: center;
        background-color: orange;
    }

</style>