<template>
  <div id="app" v-bind:style="appSize"> 
    <div class="main full-height">
        <router-view></router-view> 
    </div>
  </div>
</template>

<script type="es6">
 
  export default {
    name: 'app',
    data(){
      return {
          appSize: {
          width: '0px',
          height: '0px',
        }
      }
    },
    beforeCreate: function(){
      var me = this;
      //if(!me.$store.getters.getLoaded){
        //me.$router.push('load');
      //}
    },
    created: function(){
        var me = this;
        console.log("App created");
        var width = $(document).width();
        var height = $(document).height();
        window.documentWidth = width + 'px';
        window.documentHeight = height + 'px';
        me.appSize.width = width + 'px';
        me.appSize.height = height + 'px';
    },
    methods: {

    }
  }
</script>


<style>
.full-height{
  height: 100%;
}
</style>
