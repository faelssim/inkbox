import { SET_EDIT_CELL, SORT_END } from './eventName'

export default {
    mounted() {
        this.$eventBus.$on(SET_EDIT_CELL, ({ index, prop }) => {
            if (this.editable) {
                this.isChangeByInner = !!prop
                this.editRowIndex = index
                this.editColProp = prop
            }
        })
        this.$eventBus.$on(SORT_END, ({newIndex, oldIndex}) => {
            if (this.sortable) {
                this.isChangeByInner = true
                const D = Array.prototype.slice.call(this.data, 0)
                const T = D[oldIndex]
                D.splice(oldIndex, 1)
                D.splice(newIndex, 0, T)
                this.$emit('update:data', D)
            }
        })
    }
}