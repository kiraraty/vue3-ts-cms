<template>
  <div class="page-search">
    <SEForm v-bind="searchFormConfig" v-model="FormData">
      <template>
        <h2 class="header">高级检索</h2>
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

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SEForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    SEForm
  },
  setup() {
    const FormData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      FormData
    }
  }
})
</script>
<style lang="less" scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
