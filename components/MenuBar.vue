  <template>
    <div class="menubar">
      <div class="btn-group" role="group" aria-label="Menu bar">
        <nuxt-link to="/":class="buttonClass('\board') " >Dash Board</nuxt-link>
       <!-- <nuxt-link to="/backlog":class="buttonClass('\backlog')">Backlog</nuxt-link> -->
      </div>
    </div>
  </template>


  <script>
    export default{
      name:'MenuBar',
      methods: {
      buttonClass(path) {
        return {
          btn: true,
          'btn-primary': this.$route.path === path,
          'btn-secondary': this.$route.path !== path
        };
      }
    }
    }
  </script>

  <style>
    .menubar {
      text-align:center;
      margin-top:50px;
      margin-bottom: 16px;
    }
    #but{
      min-width:360px;
    }
  </style>
