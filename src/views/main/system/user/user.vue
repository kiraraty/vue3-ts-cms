<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"/>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },

  setup() {

    return {
      searchFormConfig,

    }
  }
})
</script>

<style scoped>
  .header{
    color:red;
  }
  .handle-btns{
    text-align: right;
    padding: 0 50px 20px 0;
  }
</style>
