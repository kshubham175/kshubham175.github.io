<template>
  <div class="container">
    <div>
      
      <h1 class="title">
        Taskboard
      </h1>
      <menu-bar></menu-bar> 
      <KanbanBoard></KanbanBoard>
    </div>
  </div>
</template>

<script>
import MenuBar  from '@/components/MenuBar'
import KanbanBoard from './KanbanBoard'
export default {
  components:{
   'menu-bar':MenuBar,
   'KanbanBoard':KanbanBoard
  },
}
</script>

<style>

</style>
