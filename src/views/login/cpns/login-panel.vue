<template>
  <div class="loginpanel">
    <h1 class="title">后台管理系统</h1>
    <!-- 标签页 -->
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <i class="el-icon-user-solid"></i>
            账号登录
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="mobile">
        <template #label>
          <span> <i class="el-icon-mobile"></i> 手机登录 </span>
        </template>
        <login-mobile ref="mobileRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginMobile from './login-mobile.vue'
export default defineComponent({
  components: {
    loginAccount,
    loginMobile
  },
  setup() {
    //定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const mobileRef = ref<InstanceType<typeof loginMobile>>()
    const currentTab = ref<string>('account')
    //定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('mobileRef调用loginaction')
      }
    }
    return {
      isKeepPassword,
      accountRef,
      currentTab,
      mobileRef,
      handleLoginClick
    }
  }
})
</script>
<style lang="less" scoped>
.title {
  text-align: center;
}
.loginpanel {
  width: 320px;
  margin-bottom: 120px;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
