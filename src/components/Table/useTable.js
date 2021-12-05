/*
 * @Author: wangkun
 * @Date: 2021-12-01 13:56:54
 * @LastEditTime: 2021-12-03 15:24:36
 * @LastEditors: wangkun
 * @Description: 
 */
export default {
    data() {
        return {
            isChangeByInner: false, // 内部一些变化引起data的变化. ps:在这种情况下不去做watch的处理
        }
    },
    watch: {
        data: {
            handler(nv) {
                console.log('change....')
                // 变化不是由编辑引起的
                if (!this.isChangeByInner) {
                    console.log('change from outer')
                }
            },
            deep: true,
            immediate: false
        }
    },
    methods: {
        getTableData() {
            console.log(this)
        },
        
    }
}