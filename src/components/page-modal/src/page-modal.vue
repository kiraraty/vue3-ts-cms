<template>
  <div class="page-modal">
    <el-dialog title="提示" v-model="dialogVisible" width="30%" center>
      <SEForm v-model="formData" v-bind="modalConfig"> </SEForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import SEForm from '@/base-ui/form/index'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    SEForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    return {
      dialogVisible,
      formData
    }
  }
})
</script>
<style lang="less" scoped></style>
