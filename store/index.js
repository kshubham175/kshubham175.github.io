import Vue from 'vue';
import Vuex from 'vuex';

import localStoragePlugin from '@/plugins/localStorage';

Vue.use(Vuex);

export const plugins = [localStoragePlugin]

const createStore = () => {
  return new Vuex.Store(
    {
        plugins:[localStoragePlugin],
  state: {
    items: {
      todo: [],
      inProgress:[],
      done:[],
    },
    nextId: 1,
  },
  mutations: {
    addItemtodo(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.nextId += 1;
    },
    addIteminProg(state, item) {
        state.items.inProgress.push(Object.assign(item, { id: state.nextId }));
        state.nextId += 1;
      },
      addItemdone(state, item) {
        state.items.done.push(Object.assign(item, { id: state.nextId }));
        state.nextId += 1;
      },
    updateItems(state, { items, id }) {
        state.items[id] = items;
      },
      removeItem(state,iD){
        [state.items.todo, state.items.inProgress, state.items.done].forEach(
            array => {
              const indexInArray = array.findIndex(i => i.id === iD);
              if (indexInArray > -1) {
                array.splice(indexInArray, 1);
              }
            }
          );
      },
      initializeStore() {
        const data = localStorage.getItem('boardState');
  
        if (data) {
          this.replaceState(Object.assign(this.state, JSON.parse(data)));
        }
      },
}
  
});
}

export default createStore;