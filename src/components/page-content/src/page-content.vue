<template>
  <div class="page-content">
    <SETable :listData="dataList" v-bind="contentTableConfig">
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <el-button icon="el-icon-edit" size="mini" type="primary" plain
          >编辑</el-button
        >
        <el-button icon="el-icon-delete" size="mini" type="danger" plain
          >删除</el-button
        >
      </template>
      <template #header> </template>
      <template #footer> </template>
      <template #headerHandler>
        <el-button> 新建用户</el-button>
      </template>
    </SETable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import SETable from '@/base-ui/table/index'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    SETable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userList = computed(() => store.state.system.userList)
    //const userCount = computed(() => store.state.system.userCount)
    return {
      dataList
    }
  }
})
</script>
<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
