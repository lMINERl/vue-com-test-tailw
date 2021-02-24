<template>
  <div class="home">
    <Drawer :drawerMenuItems="this.$data.drawerMenuItems"></Drawer>
    <div class="grid grid-flow-row auto-rows-max grid-cols-7 p-10">
      <!-- <div class=""> -->
      <Table
        :tableHeaders="this.$data.tableHeaders"
        :tableData="this.$data.tableData"
      ></Table>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Drawer from "@/components/Drawer.vue";
import Table from "@/components/Table.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Drawer,
    Table
  },
  data: function() {
    return {
      tableHeaders: [
        {
          title: "Hostname",
          field: "hostname",
          headCellOverrideStyles: [`color:var(--color-secondary,#000)`],
          dataCellOverrideStyles: [`color:var(--color-secondary,#000)`]
        },
        { title: "Model", field: "model" },
        { title: "Site", field: "site" },
        { title: "Role", field: "role" },
        { title: "Status", field: "status" }
      ],
      tableData: [
        {
          id: "1",
          hostname: "NSWCPE0005",
          model: "2",
          site: "3",
          role: "2",
          status: "asd"
        },
        {
          id: "2",
          hostname: "NSWCPE0005",
          model: "2",
          site: "3asddasdasdasdasdasdasdsas",
          role: "2",
          status: "asd"
        },
        {
          id: "3",
          hostname: "NSWCPE0005",
          model: "2",
          site: "3",
          role: "2",
          status: "asd"
        }
      ],
      drawerMenuItems: [
        { name: "home", location: "/" },
        { name: "about", location: "/about" },
        { name: "settings", location: "/settings" }
      ]
    };
  }
});
</script>
