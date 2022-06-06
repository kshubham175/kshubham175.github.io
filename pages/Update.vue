<template>
<div>
   <nuxt-link to="/":class="buttonClass('\board') " >Dash Board</nuxt-link>
<h1>
    UPADTE</h1>
    
<form action="\Update" method="post"v-on:submit.prevent="submitForm(id)" >
    Title:
            <input type="text" v-model="itemText" placeholder="Title"><br>
            Description:
            <input type="text "v-model="itemDesc" placeholder="Description"><br>
            Status:

            <select id="status" v-model="itemStat" required>
                <option hidden >Status</option>
  <option value="todo">Not Started</option>
  <option value="inProgress">In Progress</option>
  <option value="done">Completed</option>
  
</select><br>
           <!-- <input type="text" v-model="itemDesc" placeholder="Description"> -->
           <input type="submit" value="update"v-on:submit.prevent="submitForm(id)">
        </form> 
        <h1>Delete</h1>
        <button id="del"  @click="removeItem(id)">Delete</button>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import TaskLaneItem from '@/components/TaskLaneItem';

export default{
name:'Update',
data(){
    return {msg:" ",
    id:this.$route.query.myprop.id,
     itemText: this.$route.query.myprop.text,
        itemDesc: this.$route.query.myprop.desc, 
        itemStat:"",};
},
methods:{
  buttonClass(path) {
        return {
          btn: true,
          'btn-primary': this.$route.path === path,
          'btn-secondary': this.$route.path !== path
        };
      },
    removeItem(iD){
        this.msg="Deleted";
        console.log(iD);
        this.$store.commit('removeItem',iD);

    },
    submitForm(iD) {
          
          this.msg="Modified";
        if (this.itemStat==="todo") {
              this.$store.commit('removeItem',iD);
            this.msg="Modified";
          this.$store.commit('addItemtodo', {
            text: this.itemText,
           desc:this.itemDesc,
           stat:this.itemStat,
          });

          this.itemText = '';
          this.itemDesc= '';
          this.itemStat='';
        }
        else if(this.itemStat==="inProgress")
        {
            this.$store.commit('removeItem',iD);
             this.msg="Modified";
          this.$store.commit('addIteminProg', {
            text: this.itemText,
           desc:this.itemDesc,
           stat:this.itemStat,
          });

          this.itemText = '';
          this.itemDesc= '';
          this.itemStat='';
        }
        else if(this.itemStat==="done")
        {
            this.$store.commit('removeItem',iD);
             this.msg="Modified";
          this.$store.commit('addItemdone', {
            text: this.itemText,
           desc:this.itemDesc,
           stat:this.itemStat,
          });

          this.itemText = '';
          this.itemDesc= '';
          this.itemStat='';
        }
      },
},
}
</script>
<style>
h1{
    text-align:center;
}
form{
    width:350px;
    margin-left:auto;
    margin-right:auto;
    text-align:left;
    
    padding:10px;
}
input,select,#del{
    
    text-align:center;
    background:grey;
    border-radius:5px;
    margin:5px;
}
#del{
    text-align:center;
    width:100px;
}
div{
    text-align:center;
}
</style>