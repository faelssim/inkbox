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
    action: {
        type: String,
        default: ''
    },
    border: {
        type: Boolean,
        default: true
    },
    stripe: {
        type: Boolean,
        default: true
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