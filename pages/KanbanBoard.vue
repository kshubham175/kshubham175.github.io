<template>
    <div class="board">
      <div class="row">
          <div class="col-md">
              <nuxt-link to="/backlog">Add New +</nuxt-link>
            <task-lane id="todo" title="Not Started" :items="todoItems"></task-lane>
          </div>
           <div class="col-md">
               <nuxt-link to="/backlog">Add New +</nuxt-link>
    <task-lane id="inProgress" title="In progress" :items="inProgressItems"></task-lane>
  </div>
  <div class="col-md">
      <nuxt-link to="/backlog">Add New +</nuxt-link>
    <task-lane id="done" title="Completed" :items="doneItems"></task-lane>
  </div>
      </div>
    </div>
  </template>


  <script>
   import { mapState } from 'vuex';
  import TaskLane from '@/components/TaskLane';

  export default {
    name: 'KanbanBoard',
    components: {
      'task-lane': TaskLane,
    },
    computed: mapState({
      todoItems: s => s.items.todo,
      inProgressItems:s=>s.items.inProgress,
      doneItems:s=>s.items.done,
    }),
  };
  </script>