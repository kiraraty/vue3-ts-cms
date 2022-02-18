<template>
  <div class="loginaccount">
    <el-form label-width="70px" :rules="accountRules" ref="formRef">
      <el-form-item label="账号:" prop="username">
          <el-input v-model="account.username">

          </el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="account.password" type="password">

        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive,ref } from 'vue'
import { ElForm } from 'element-plus'
import { accountRules} from '../config/account-config'
export default defineComponent ({
      setup() {
        const account=reactive({
          username:'',
          password:''
        })
        const formRef=ref<InstanceType<typeof ElForm>>()
        const loginAction=()=>{
            formRef.value?.validate((valid)=>{
              if(valid){
                
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
<style lang='less' scoped>

</style>
