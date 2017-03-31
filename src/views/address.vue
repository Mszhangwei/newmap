<template>
  <div class="full-height">
     <div id="allmap"></div>
  </div>
</template>

<script type="es6">
  
  export default{
    data(){
      return {
      //  city:"",
      }
    },
    mounted(){
      this.get();
    },
    methods:{
      get:function(){
          var city=this.$route.params.val;
          var map = new BMap.Map("allmap");
          var point = new BMap.Point(116.331398,39.897445);
          map.centerAndZoom(point,11);

          var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){

              //var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));
	            //var marker2 = new BMap.Marker(r.point,{icon:myIcon});  // 创建标注
	            //map.addOverlay(marker2);              // 将标注添加到地图中

              var mk = new BMap.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              //alert('您的位置：'+r.point.lng+','+r.point.lat);
              var local = new BMap.LocalSearch(map, {
                  renderOptions:{map: map}
              });
              local.search(city);
            }
            else {
              alert('failed'+this.getStatus());
            }        
          },{enableHighAccuracy: true})
      }
    },
  
  }
</script>
<style scoped>
  #allmap{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
</style>


