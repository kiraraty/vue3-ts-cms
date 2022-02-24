<template>
  <div class="page-search">
    <SEForm v-bind="searchFormConfig" v-model="FormData">
      <template>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <dir class="handle-btns">
          <el-button
            type="primary"
            icon="el-icon-refresh"
            @click="handleResetClick"
            >重置</el-button
          >
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
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    //当前用户点击重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
    }

    return {
      FormData,
      handleResetClick
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
