<template>
    <div>
        <el-table
            :border="border"
            :data="data"
            :stripe="stripe"
        >
            <el-table-column
                v-for="col of columns"
                :key="col.prop"
                :label="col.label"
                :prop="col.prop"
                :width="col.width"
                :min-width="col.minWidth"
                :align="col.align || 'center'"
            >
                <template #default="{ row, $index }">
                    <slot v-if="col.customRender && col.customRender.slot" :name="col.customRender.slot" :row="row" :column="col" :index="$index"></slot>
                    <el-tooltip v-if="!col.customRender" class="item" effect="dark" :content="row[col.prop]" placement="top" :disabled="!col.showTip">
                        <span>{{ row[col.prop] }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <!-- 页码 -->
        <div v-if="isPagination" class="table-pagination">
            <el-pagination
                :small="true"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import props from './props'
import useInit from './useInit'
import useTable from './useTable'
import usePagination from './usePagination'
export default {
    name: 'FTable',
    mixins: [useInit, useTable, usePagination],
    props,
    data() {
        return { }
    },
    mounted() {
        // this.action && this.getTableData()
    }
}
</script>

<style scoped>
.table-pagination{
    padding: 10px  0;
    text-align: right;
}
</style>