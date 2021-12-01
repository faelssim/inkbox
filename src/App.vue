<template>
  <div id="app">
    <Table :columns="columns" :data="List">
        <template #age="{ row, index }">
            <span style="color: red;">{{ row.age }}-{{ index }}</span>
        </template>
    </Table>
  </div>
</template>

<script>
import Table from './components/Table/index.vue'
const columns = [
    { label: '姓名', prop: 'name', showTip: true  },
     { label: '年龄', prop: 'age', customRender: { slot: 'age' }  },
     { label: '地址', prop: 'address'  }
]
export default {
  name: 'App',
  components: {
    Table
  },
  data() {
      return {
          columns,
          List: [
              { name: 'faelssim', age: 40, address: 'China Suzhou.' },
              { name: 'faelssim', age: 30, address: 'China Suzhou.' }
          ]
      }
  }
}
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
