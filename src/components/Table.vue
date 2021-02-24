<template>
  <table class="table">
    <tr class="table__header">
      <th
        v-for="(item, index) in tableHeaders"
        v-bind:key="index"
        class="table__header__cell"
      >
        <div class="table__header__cell__title">{{ item.title }}</div>
      </th>
    </tr>
    <tr v-for="item in tableData" v-bind:key="item.id" class="table__row">
      <td
        v-for="theader in tableHeaders"
        v-bind:key="theader.field"
        class="table__row__cell short-text"
        :style="
          theader.dataCellOverrideStyles &&
          theader.dataCellOverrideStyles.length !== 0
            ? theader.dataCellOverrideStyles.join(';')
            : ''
        "
      >
        <div class="table__row__cell__data short-text">
          {{ item[theader.field] }}
        </div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    tableHeaders: {
      default: [] as { title: string; field: string }[]
    },
    tableData: {
      default: [] as { id: string; [key: string]: unknown }[]
    }
  }
});
</script>
