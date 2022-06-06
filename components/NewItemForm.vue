<template>
    <div class="add-item">
        <form action="\backlog" method="post"v-on:submit.prevent="submitForm" >
            Title:<input type="text" v-model="itemText" placeholder="Title" required>
            <br>Description:<input type="text "v-model="itemDesc" placeholder="Description">
            <br>Status:<select id="status" v-model="itemStat" required>
                <option hidden >Status</option>
  <option value="todo">Not Started</option>
  <option value="inProgress">In Progress</option>
  <option value="done">Completed</option>
  
</select>
           <!-- <input type="text" v-model="itemDesc" placeholder="Description"> -->
          <br> <input type="submit" v-on:submit.prevent="submitForm">
        </form>
        <p>{{msg}}</p>
    </div>
</template>

<script>
  export default {
    name: 'NewItemForm',
    data() {
      return {
        itemText: '',
        itemDesc: '', 
        itemStat:'',
        msg: '',
      };
    },
    methods: {
      submitForm() {
          
        if (this.itemStat==="todo") {

            this.msg="Added to Not Started";
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
             this.msg="Added to In Progress";
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
             this.msg="Added to Completed";
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
  };
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