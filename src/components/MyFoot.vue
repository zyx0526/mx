<template>
   <div class="footer">
       <div class="footer_online">
           <div class="service_btn">
                在线客服
           </div>
           <div class="wx_btn">
               微信公众号
           </div>
       </div>
       <div class="footer_tel">
           <p>客服电话：4001-578-578 服务时间（08:30-22:30）</p>
       </div>
       <div class="footer_nav clear_fix">
           <p>
               <router-link  v-for="(item,index) in arr"  :to="item.b">{{item.a}}</router-link>

           </p>
       </div>
   </div>
</template>

<script>
export default {
  name: 'MyNav',
  data(){
      return {
          arr:[{a:"诺心公告",b:"/nuoxin"},{a:"关于诺心",b:"/guanyu"},{a:"联系我们",b:"/lianxi"},{a:"客服服务",b:"/kefu"},{a:"食品经营许可证",b:"/shiping"},{a:"生产许可证",b:"/shenchan"},{a:"预付费卡协议",b:"/yufu"},{a:"上海工商",b:"/shanghai"},{a:"环保信息",b:"/huanbao"}]
      }
  }
}
</script>

<style>
    .footer {
        font: 12px/1.5 "Hiragino Sans GB", "Microsoft YaHei", Helvetica, '宋体', STFangsong, STXihei, Arial, serif;
        width: 100%;
        height: 299px;
        border-top: 1px solid #e5e5e5;
        text-align: center;
        padding: 40px 0 20px;
        background: #ebebeb;
    }
    .footer_online {
        margin-bottom: 20px;
        color: #3e3e3e;
        font-weight: normal;
        display: flex;
        justify-content: center;
    }
    .service_btn {
        width: 100px;
        height: 18px;
        padding-top: 36px;
        background: url(../assets/service.png);
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: 50% 0
    }
    .wx_btn {
        width: 100px;
        height: 18px;
        padding-top: 36px;
        background: url(../assets/wx.png);
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: 50% 0
    }
    .footer_tel {
        height: 40px;
    }
    .footer_tel p {
        width: 14.8%;
        margin: 0 auto;
       padding-left: 30px;
        height: 40px;
        line-height: 40px;
        background: url(../assets/tel.png);
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: 0 50%
    }
    .footer_nav clear_fix {
        height: 44px;
    }
</style>
