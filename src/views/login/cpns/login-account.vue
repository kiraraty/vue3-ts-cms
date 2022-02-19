<template>
  <div class="loginaccount">
    <el-form
      label-width="70px"
      :rules="accountRules"
      ref="formRef"
      :model="account"
    >
      <el-form-item label="账号:" prop="name">
        <el-input v-model="account.name"> </el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="account.password" show-password> </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { accountRules } from '../config/account-config'
import LocalCache from '../../../utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //记住密码
          if (isKeepPassword) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
          //开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>
<style lang="less" scoped></style>
