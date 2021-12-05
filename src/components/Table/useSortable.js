import Sortable  from "sortablejs"
import { SORT_END } from './eventName'
export default {
    mounted() {
        this.sortable && this.initSortable()
    },
    methods: {
        initSortable() {
            const tbody = document.querySelector(".el-table__body-wrapper tbody");
            const self = this;
            Sortable.create(tbody, {
                ghostClass: '_table-ghost',
                onEnd({ newIndex, oldIndex }) {
                    self.$eventBus.$emit(SORT_END, {
                        newIndex,
                        oldIndex
                    })
                }
            });
        }
    }
}