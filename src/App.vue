<!--
 * @Author: wangkun
 * @Date: 2021-12-01 13:56:54
 * @LastEditTime: 2021-12-03 15:29:09
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
  <div id="app">
    <Table :columns="columns" :data.sync="List" row-key="id" editable sortable>
      <template #age="{ row }">
        <span style="color: deepskyblue">{{ row.age }}</span>
      </template>
    </Table>
    <div>
      <el-button @click="handleSave">Save</el-button>
    </div>
  </div>
</template>

<script>
import Table from "./components/Table/index.vue";

export default {
  name: "App",
  components: {
    Table,
  },
  computed: {
    columns() {
      return [
        { label: 'ID', prop: 'id', component: 'el-input', required: true },
        { label: "姓名", prop: "name", showTip: true },
        { label: "年龄", prop: "age", customRender: { slot: "age" } },
        { label: "地址", prop: "address", component: 'el-select', options: { data: [ { label: 'Suzhou', value: 'Suzhou' }, { label: 'Changzhi', value: 'Changzhi' }, { label: 'Shanghai', value: 'Shanghai' } ] } },
      ]
    }
  },
  data() {
    return {
      List: []
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.List.push({
        id: Math.floor(Math.random() * 1000000000).toString(32),
        name: 'Blue_' + i, // 蓝叶
        age: Math.ceil(Math.random() * 60) + 10,
        address: 'Shanghai'
      })
    }
  },
  methods: {
    handleSave() {
      console.table(this.List)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
