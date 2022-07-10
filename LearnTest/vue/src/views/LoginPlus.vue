<template>
  <body>
  <!-- 整体布局 -->
  <div class="container right-panel-active">
    <!-- 注册框 -->
    <div class="container_from container--signup">
      <form action="#" class="from" id="from1">
        <h2 class="from_title">注册账号</h2>
        <input type="text" placeholder="User" class="input">
        <input type="email" placeholder="Email" class="input">
        <input type="password" placeholder="Password" class="input">
        <button class="btn">点击注册</button>
      </form>
    </div>
    <!-- 登录框 -->
    <div class="container_from container--signin">
      <form action="#" class="from" id="from2">
        <h2 class="from_title">欢迎登录</h2>
        <input type="email" placeholder="Email" class="input">
        <input type="password" placeholder="Password" class="input">
        <a href="#" class="link">忘记密码?</a>
        <button class="btn">登录</button>
      </form>
    </div>

    <div class="container_overlay">
      <div class="overlay">
        <div class="overlay_panel overlay--left">
          <button class="btn" id="signin">已有账号，直接登录</button>
        </div>

        <div class="overlay_panel overlay--right">
          <button class="btn" id="signup">没有账号，点击注册</button>
        </div>
      </div>
    </div>

  </div>
  </body>
</template>


<style>
/* root根伪类 --为自定义CSS属性，方便我们重复使用同一个属性 自定义属性使用var() 进行调用*/
:root{
  /* 背景颜色 */
  --white:#e9e9e9;
  --gray:#333;
  --blue:#0367a6;
  --lightblue:#008997;

  /* 外边框圆角属性 */
  --button-radius:0.7rem;
  --max-width:758px;
  --max-height:420px;
  /* 字体样式 */
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

body{
  align-items: center;
  background-color: var(--white);
  background: url();
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height:100vh;
  place-items: center;
}

.from_title{
  font-weight: 300;
  margin:0;
  margin-bottom: 1.25rem;
}

.link{
  color: var(--gray);
  font-size:0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
}

.container{
  background-color: var(--white);
  border-radius: var(--button-radius);
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0,0.25);
  height: var(--max-height);
  max-width: var(--max-width);
  overflow: hidden;
  position:relative;
  width: 100%;
}

.container_from{
  height: 100%;
  position:absolute;
  top:0;
  transition: all 0.6s ease-in-out;
}

.container--signin{
  left:0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin{
  transform: translateX(100%);
}

.container--signup{
  left:0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup{
  animation:show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container_overlay{
  height: 100%;
  left:50%;
  overflow: hidden;
  position:absolute;
  top:0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index:100;
}

.container.right-panel-active .container_overlay{
  transform: translateX(-100%);
}

.overlay{
  background-color: var(--lightblue);
  background: url();
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left:-100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay{
  transform: translateX(50%);
}

.overlay_panel{
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position:absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left{
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left{
  transform: translateX(0);
}

.overlay--right{
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right{
  transform: translateX(20%);
}

.btn{
  background-color: var(--blue);
  background-image: linear-gradient(90deg,var(--blue) 0%,var(--lightblue) 74%);
  border-radius: 20px;
  border:1px solid var(--blue);
  color:var(--white);
  cursor:pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form > .btn{
  margin-top: 1.5rem;
}

.btn:active{
  transform: scale(0.95);
}

.btn.focus{
  outline: none;
}

.from{
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input{
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width:100%;
}

@keyframes show{
  0%,
  49.99%{
    opacity: 0;
    z-index: 1;
  }

  50%,
  100%{
    opacity: 1;
    z-index: 5;
  }
}

</style>


<script>
export default {
  name: "LoginPlus",
  data(){
    return {
      signinBtn: document.getElementById("signin"),
      signupBtn: document.getElementById("signup"),
      firstForm: document.getElementById("from1"),
      secondForm: document.getElementById("from2"),
      container: document.querySelector(".container"),
    }
  },
  created(){
    signinBtn.addEventListener("click",()=>{
      container.classList.remove("right-panel-active")
    }),
    signupBtn.addEventListener("click",()=>{
      container.classList.add("right-panel-active")
    })
  }
}
</script>

