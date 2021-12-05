/*
 * @Author: wangkun
 * @Date: 2021-12-01 13:56:54
 * @LastEditTime: 2021-12-03 14:36:54
 * @LastEditors: wangkun
 * @Description: 
 */
const props = {
    columns: {
        type: Array,
        required: true,
        default: () => []
    },
    data: {
        type: Array,
        default: () => []
    },
    rowKey: String,
    action: {
        type: String,
        default: ''
    },
    editable: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: true
    },
    stripe: {
        type: Boolean,
        default: true
    },
    sortable: {
        type: Boolean,
        default: false
    },
    isPagination: {
        type: Boolean,
        default: true
    },
    size: {
        type: [String, Number],
        default: 50
    }
}
export default props