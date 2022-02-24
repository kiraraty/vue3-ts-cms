<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

//引入配置
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
//引入组件
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
