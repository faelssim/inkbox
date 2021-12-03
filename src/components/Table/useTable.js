/*
 * @Author: wangkun
 * @Date: 2021-12-01 13:56:54
 * @LastEditTime: 2021-12-03 15:24:36
 * @LastEditors: wangkun
 * @Description: 
 */
export default {
    watch: {
        data: {
            handler(nv) {
                console.log('change')
            },
            deep: true,
            immediate: false
        }
    },
    methods: {
        getTableData() {
            console.log(this)
        }
    }
}