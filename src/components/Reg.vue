<template>
    <div>
        <div class="wrap">
            <div class="main_width clear_fix">
                <img src="../../static/logo_new.png" alt="" class="pic">
            </div>
        </div>
        <div class="main">
            <div class="banner_link">
                <div class="login_wrap">
                    <div class="clear_fix tab_title">
                        <div class="f_left" @click="click"  data-id="1" :style="[ac==true?mystyle:'']">手机验证登录</div>
                        <div class="f_right">
                            <span>|</span>
                            <span @click="click" data-id="2" :style="[ac2==true?mystyle:'']">账户密码登录</span>
                        </div>
                    </div>
 
                    <div class="tab_mobile" v-if="ac">
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="11" title="手机号码" class="phone" v-model="telphone" placeholder="手机号码">
                            <span class="error_message" >{{tel3}}</span>
                        </p>
                        <p class="input_wrap yzm_wrap">
                            <input type="text" maxlength="6" class="yzm" title="验证码" v-model="yanzhengma" placeholder="请输入验证码">
                            <img src="https://www.lecake.com/customer/captcha.html?w=80&h=30&offset=2&v=0.33357310319231614" alt=""> 
                            <span>换一个</span> 
                        </p>
                         <p class="input_wrap yzm_wrap">
                            <input type="text" maxlength="6" title="短信验证码"  placeholder="短信验证码">
                            <button class="code_btn"  @click="yanzheng">发送验证码</button>
                            <span class="error_message" v-if="duanxin">请输入短信验证码</span>
                        </p>
                    </div>

                    <div class="tab tab_account" v-else>
                        <p class="input_wrap username_wrap">
                            <input type="text" maxlength="50" title="email/手机号" placeholder="请输入账号" autocomplete="off">
                            <span class="error_message" >{{tel3}}</span>
                        </p>
                        <p class="input_wrap password_wrap">
                            <input type="password" maxlength="50" title="密码" placeholder="请输入密码">

                        </p>
                    </div>


                    <button class="btn" @click="login">立即登录</button>
                    <div class="clear_fix bottom_link">
                        <router-link   class="link_1"   to="/forget">忘记密码</router-link>
                        <div>
                             <span>还没有账号？</span>
                             <span class="link_2">立即注册</span>
                        </div>
                    </div>

                    <div class="more_login_type">
                        <div>-------其他登录方式-------</div>
                    </div>
                    <div class="type_list">
                        <img src="../../static/weixin.png" alt="">
                        <img src="../../static/qq.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { constants } from 'fs';
	export default {
        name:"Reg",
        data(){
            return {
                ac:true,
                ac2:false,
                tel:"手机号码不能为空",
                tel2:"手机号码格式不正确",
                tel3:"",
                dxyzm:false,
                telphone:"",
                yanzhengma:"",
                duanxin:false,
                mystyle :{
                    color: "#fe4320"
                }
            }
        },
        methods: {
            click: function(e){
                console.log(e.srcElement.dataset.id)
               if(e.srcElement.dataset.id==1){
                   this.ac=true
                   this.ac2=false
               }else {
                   this.ac=false
                   this.ac2=true
               }
            },
            yanzheng: function () {
                console.log(this.telphone)
                if(this.telphone==""){
                    this.tel3=this.tel
                    return ;
                }else if(!(/^1[34578]\d{9}$/.test(this.telphone))){ 
                    this.tel3=this.tel2 
                    return ; 
                }else if(this.yanzhengma!="zzzz"){
                    alert("验证码错误，请重新输入")
                    return ;
                }
            },
            login: function(){
                console.log(this.telphone)
                 if(this.telphone==""){
                    this.tel3=this.tel1
                    return ;
                }else if(!(/^1[34578]\d{9}$/.test(this.telphone))){ 
                    this.tel3=this.tel2 
                    return ; 
                }else if(this.duanxin==""){
                    this.duanxin=true
                    return ;
                }
            }
        }
	}
</script>

<style scoped>
	.wrap {
        width: 100%;
        height: 83px;
        border-bottom: 1px solid #e5e5e5;
        
    }
    .main_width  {
        padding: 29px 0;
        width: 62.5%;
        margin: 0 auto;
        height: 24px;
    }
    .pic {
        width: 207px;
        height: 24px;
    }
    .main {
        height: 520px;
        width: 100%;
        background: url(../../static/bg.jpg)
    }
    .banner_link {
        width: 46.25%;
        height: 520px;
        margin: 0 auto
    }
    .login_wrap {
        float: right;
        position: relative;
        z-index: 2;
        top: 50px;
        width: 250px;
        padding: 20px 60px;
        background: #ffffff;
        opacity: 0.95;
    }
    .tab_title  {
        width: 250px;
        height: 28px;
        margin-bottom: 20px;
        font-size: 14px;
        display: flex
    }
    .tab_title div {
        width: 125px;
        height: 28px;
        line-height: 28px;
    }
    .f_left {
        cursor: pointer;
    }
    .f_right {
        display: flex;
        justify-content: space-between;
    }
    .f_right>span:nth-child(2) {
        cursor: pointer;
    }
    .tab_mobile {
        
    }
    .input_wrap {
        width: 250px;
        height: 30px;
        margin-bottom: 30px;
    }
    .input_wrap input {
        border: none;
        outline: none;
        line-height: 20px;
        padding: 4px 0 5px 24px;
        width: 226px;
        border-bottom: 1px solid #e5e5e5;
    }
    .username_wrap input {
        background: url(../../static/teltwo.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .password_wrap input {
        background: url(../../static/xinhao.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .yzm_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .yzm_wrap input {
        width: 128px;
        background: url(../../static/yaoshi.png);
        background-size: 15px 15px;
        background-repeat: no-repeat;
        background-position: 0 45%;
    }
    .yzm_wrap span {
        
        font-size: 12px;
       
    }
    .yzm_wrap> img {
        width: 50px;
        height: 30px;
    }
    .code_btn {
        border: none;
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fe4320;
        font-size: 12px;
        color: #ffffff;
        cursor: pointer;
    }
    .btn {
        border: none;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fe4320;
        color: #ffffff;
        font-size: 16px;
    }
    .bottom_link {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
          color: #949494;
          font-size: 12px;
    }
    .link_1 {
        color: #949494;
        text-decoration: none;
    }
    .link_2 {
        color: #fe4320;
        cursor: pointer;
    }
    .more_login_type {
        margin-top: 20px;
        color: #949494;
        font-size: 12px;
    }
    .more_login_type> div {
        text-align: center;
        height: 20px
    }
    .type_list {
        height: 50px;
        text-align: center;
        padding-top: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .type_list img {
        width: 32px;
        height: 32px;
        line-height: 50px;
    }
    .type_list>img:nth-child(1) {
        margin-right: 15px;
    }
    .error_message {
        text-align: left;
        text-indent: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #ff0000;
        display: inline-block;
        width: 250px;
    }
</style>