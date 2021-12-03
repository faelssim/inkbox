/*
 * @Author: wangkun
 * @Date: 2021-12-03 14:40:06
 * @LastEditTime: 2021-12-03 15:17:29
 * @LastEditors: wangkun
 * @Description: 
 */
export default {
    data() {
        return {
            editRowIndex: '',
            editColProp: '',
        }
    },
    mounted() {
        this.$eventBus.$on('set-edit-cell', ({ index, prop }) => {
            this.editRowIndex = index
            this.editColProp = prop
        })
    },
    beforeDestory() {
        // TODO: remove listener
    },
    methods: {
        isEditStatus(index, { prop }) {
            return this.editRowIndex === index && this.editColProp === prop && this.editable
        },
        /**
         * from EditCell
         * 监听组件值变化事件
         * @param {*} param
         */
        handleValueChange({ value, index, prop }) {
            this.data[index][prop] = value
        }
    }
}
