export default {
    mounted() {
        this.$util.colorfulLog([1,2,3])
        this.$util.colorfulLog('good', 'red')
        this.getTableData() // from useTable
    }
}
