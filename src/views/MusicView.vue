<script setup>
import MvList from '@/components/MvList.vue';
import {newMvList} from '@/assets/js/index/mv';
const {mv_info, chooseMvTag } = newMvList();
</script>
<template>
  <div class="Music">
    <div class="card">
      <div class="card-title">
        <h3>MV</h3>
        <span v-for="(item, index) in mv_info.tags" :key="item.id" :class="{'active': index == mv_info.index}" @click="chooseMvTag(index)">{{item}}</span>
      </div>
      <div class="card-body">
        <mv-list :mvList="mv_info.lists" :loading="mv_info.loading" :num="mv_info.params.limit"></mv-list>
      </div>
    </div>
  </div>
</template>
