<template>
  <div class="page-search">
     <SEForm  v-model="FormData">
      <template>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <dir class="handle-btns">
        <el-button type="primary" icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </dir>
    </template>
    </SEForm>
  </div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import PageSearch from '@/components/page-search'
import SEForm from '@/base-ui/form'
export default defineComponent ({
  props:{
    searchFormConfig:{
      type:Object,
      required:true
    }
  },
   components: {
    SEForm
  },
    setup() {
    const FormData=ref({
    id:'',
    name:'',
    password:'',
    sport:'',
    createTime:''
  })
      return {
          FormData
        }
      }
  })
</script>
<style lang='less' scoped>

</style>
