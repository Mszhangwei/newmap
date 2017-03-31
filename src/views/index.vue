<template>
  <div class="full-height">
    <div class="full-height">
       <div class="market color1" @click="store()">
         <img src="/static/images/supstore.png" class="logo">
         <img src="/static/images/btn-pull.png" class="pull">
        </div>
         <ul id="1">
            <li v-for="item in supstore"  @click="map(item.val)">
                {{ item.name }} <img src="/static/images/map.png">
            </li>
          </ul>
          <!--大超市-->
        <div class="market color2" @click="largesuper()">
         <img src="/static/images/largesupermarket.png" class="logo">
         <img src="/static/images/btn-pull.png" class="pull">
        </div>
           <ul id="2">
              <li v-for="item in largesupermarket" @click="map(item.val)">
                {{ item.name }} <img src="/static/images/map.png" >
              </li>
           </ul>
          <!--超市-->
        <div class="market color3" @click="market()" >
         <img src="/static/images/supmarket.png" class="logo">
         <img src="/static/images/btn-pull.png" class="pull">
        </div>
        <ul id="3">
            <li v-for="item in supmarket" @click="map(item.val)">
                {{ item.name }} <img src="/static/images/map.png" >
            </li>
          </ul>
          <!--便利店-->
        <div class="market color4" @click="convenience()">
         <img src="/static/images/convenienceStore.png" class="logo">
         <img src="/static/images/btn-pull.png" class="pull">
        </div>
        <ul id="4">
            <li v-for="item in convenienceStore" @click="map(item.val)">
                {{ item.name }} <img src="/static/images/map.png" >
            </li>
          </ul>
          <!--批发-->
        <div class="market color5" @click="sale()">
         <img src="/static/images/wholesale.png" class="logo">
         <img src="/static/images/btn-pull.png" class="pull">    
        </div>
          <ul id="5">
            <li v-for="item in wholesale" @click="map(item.val)">
                {{ item.name }} <img src="/static/images/map.png" >
            </li>
          </ul>
           
    </div>
  </div>
</template>

<script type="es6">
  import {api} from '../assets/js/common';
  export default{
    data(){
      return {
         supstore:[   //百货
            {name:"LOTUS(卜蜂莲花)",val:"卜蜂莲花"},
            {name:"RAINBOW DEPARTMENT/TIAN HONG(天虹商场)",val:"天虹商场"},
            {name:"PARKSON(百盛)",val:"百盛"},
            {name:"GRANDBUY(广州百货)",val:"广州百货"},
           
      ],
        supmarket:[      //超市
            {name:"HUALIAN(华联超市)",val:"华联超市"},
            {name:"CENTURY MART(世纪联华)",val:"世纪联华"},
            {name:"TRUST-MART(好又多)",val:"好又多"},
            {name:"VANGUARD(华润万家)",val:"华润万家"},
            {name:"G-MART",val:"G-MART"},
            {name:"LINCOS(丸悦超市)",val:"丸悦超市"},
            {name:"RENRENLE(人人乐超市)",val:"人人乐超市"},
            {name:"WATSON(屈臣氏)",val:"屈臣氏"},

        ],
        convenienceStore:[          //便利店
             {name:"7-11(7-11)",val:"7-11"},
            {name:"MEIYIJIA(美宜佳)",val:"美宜佳"},
            {name:"CIRCLEK(ok便利店)",val:"ok便利店"},
            {name:"LAWSON(罗森)",val:"罗森"},
            {name:"EASYBUY(EASYBUY便利店)",val:"EASYBUY便利店"},
             {name:"SUGUO(苏果超市)",val:"苏果超市"},
        ],
       wholesale:[           //批发市场
            {name:"广州(德路)",val:"德路"},
            {name:"上海(九千路国际食品城)",val:"九千路国际食品城"},
            {name:"沈阳(沈阳南二批发城)",val:"沈阳南二批发城"},
            {name:"哈尔滨(南极名优城)",val:"南极名优城"},
            {name:"天津(天津新耀消费品批发城)",val:"天津新耀消费品批发城"},
       ],
         largesupermarket:[       //大型超市
            {name:"WAL-MART(沃尔玛)",val:"沃尔玛"},
            {name:"CARREFOUR(家乐福)",val:"家乐福"},
            {name:"RT-MART(大润发)",val:"大润发"},
            {name:"CENTURY MART(世纪联华)",val:"世纪联华"},
            {name:"DIG(DIG进口商品直销中心)",val:"DIG进口商品直销中心"},
            
            {name:"METROAG(麦德龙)",val:"麦德龙"},
            {name:"FUSHENG(福盛超市)",val:"福盛超市"},
       ]
      }
    },

    methods:{
      store:function(){
          $("#1").slideToggle(300);
          $("#2,#3,#4,#5").slideUp();
      },
      largesuper:function(){
          $("#2").slideToggle(300);  
          $("#1,#3,#4,#5").slideUp();
    
      },
      market:function(){
          $("#3").slideToggle(300); 
           $("#1,#2,#5,#4").slideUp();
      },
      convenience:function(){
          $("#4").slideToggle(300);  
           $("#1,#2,#3,#5").slideUp();
         
      },
      sale:function(){
          $("#5").slideToggle(300);  
           $("#2,#3,#4,#1").slideUp();
      },
      map:function(val){
         
         location.href="#/address/"+val;
      }
    },
  
  }
</script>
<style scoped>
.color1{background-color:#eeb934;}
.color2{background-color:#e7a235;}
.color3{background-color:#dd7632;}
.color4{background-color:#c8550f;}
.color5{background-color:#eeb934;}
.market{width:100%;padding:0.5rem 0.5rem;text-align: right;height: 2.5rem;}
ul{display:none;color:#dd7632;}
.market .logo{width:5rem;margin-top: -0.2rem;}
.market .pull{width:0.6rem; margin-top: 0.475rem;height: 0.6rem;margin-left:0.5rem}
li{height:1.5rem;line-height:1.5rem;border-bottom:1px solid #eeb934;padding-left: 0.5rem;padding-right: 0.5rem;}
li img{width: 0.75rem;float:right;margin-top: 0.375rem;}
</style>

