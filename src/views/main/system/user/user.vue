<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <dir class="content">
      <SETable
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
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
      </SETable>
    </dir>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import SETable from '@/base-ui/table/index'
import { useStore } from '@/store'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    SETable
  },

  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '50' },
      { prop: 'realname', label: '真实姓名', minWidth: '50' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '100',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '100',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '120',
        slotName: 'handler'
      }
    ]
    const showIndexColumn = true
    const showSelectColumn = true
    return {
      searchFormConfig,
      userList,
      showIndexColumn,
      propList,
      showSelectColumn
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
