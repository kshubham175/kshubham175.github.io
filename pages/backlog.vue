<template>
  <div class="backlog-view">
    <h1>Add Item</h1>
     <nuxt-link to="/":class="buttonClass('\board') " >Dash Board</nuxt-link>
    <new-item></new-item>
    <!--
     <div class="card" v-for="item in items" :key="item.id">
          <div class="card-block">
            <h5 class="card-title"><span class="text-muted">#{{item.id}}</span>
            {{item.text}}</h5>
           <h6>{{item.desc}}</h6>
          </div>-->
      </div>
  </div>


</template>
<script>
import {mapState} from 'vuex'
import NewItemForm from '@/components/NewItemForm'
export default {
  name: 'Backlog',
  components:{
      'new-item':NewItemForm,
  },
   computed: mapState({
      items: s => s.items.todo,
    }),
     methods: {
      buttonClass(path) {
        return {
          btn: true,
          'btn-primary': this.$route.path === path,
          'btn-secondary': this.$route.path !== path
        };
      }
    }
};
</script>