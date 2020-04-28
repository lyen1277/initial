<template>
  <div>
    <div class="imgTop">
      <div class="htitle">歡迎回來!</div>
      <div class="header">
        <div class="headerphoto">
          <img src="../../assets/img/user/touxiang.png" alt="">
        </div>
        <div class="headtitle">
          <div class="name">112233</div>
          <div class="money">账户余额&nbsp;:&nbsp;&nbsp;&nbsp;99999</div>
        </div>
      </div>
    </div>
    <usernavList></usernavList>
    <van-button type="primary" color='#f84918' text='退出登录' block></van-button>
  </div>
</template>

<script>
import usernavList from './components/usernavList'
export default {
    name: 'my',
    components: {
        usernavList
    }
}
</script>

<style lang="less" scoped>
/deep/.van-button {
  width: 75%;
  border-radius: 50px;
  height: 40px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
}
.imgTop {
  position: relative;
  width: 100%;
  height: 200px;
  background: url('../../assets/img/user/index_top.png') no-repeat;
  background-size: cover;
  .htitle {
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
  .header {
    width: 90%;
    height: 80px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: 0px 3px 0px 0px #eee;;
    .headerphoto {
      padding: 0 10px;
    }
    .headtitle {
      width: 100%;
      height: 65%;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      .money {
        color: #ff7f00;
      }
    }
  }
}
</style>
