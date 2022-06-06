<template>
<nuxt-link :to="{path:'/Update',query :{myprop:item}}"  >
<button @click="test(item)">
  <div class="card task-lane-item">
    <div class="card-block">
      <h5 class="card-title">
        <span class="text-muted"></span>
        {{item.text}}
      </h5>
      <p>
          {{item.desc}}
          </p>
    </div>
  </div>
  </button>
  </nuxt-link>
</template>
<script>
export default {
  name: 'TaskLaneItem',
  props: ['item'],
  methods:{
      test(item){
          console.log("Hello");
          console.log(item.text);
      }
  }
};
</script>
<style>
  .card.task-lane-item {
    background: grey;
    min-height:50px;
    border-radius:10px;
    
  }
  h5{
      font-weight:1000;
      text-align:center;
      color:black;
  }
  button{
      width:100%;
      padding:0;
      border-radius:10px;
      margin:5px;
  }
</style>