<!--
 * @Author: wangkun
 * @Date: 2021-12-01 13:56:54
 * @LastEditTime: 2021-12-03 15:12:59
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div>
        <el-table
            cell-class-name="_table-cell"
            header-row-class-name="_table-header"
            :row-key="rowKey"
            :border="border !== undefined"
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
                    <!-- 可编辑单元格 -->
                    <template v-if="col.component">
                        <edit-cell
                            :name="col.component" 
                            :editable="isEditStatus($index, col)" 
                            :row="row"
                            :index="$index"
                            :prop="col.prop"
                            :required="col.required"
                            v-bind="col"
                            @[VALUE_CHANGE]="handleValueChange"
                        />
                    </template>
                    <template v-else>
                        <slot v-if="col.customRender && col.customRender.slot" :name="col.customRender.slot" :row="row" :column="col" :index="$index"></slot>
                        <el-tooltip v-if="!col.customRender" class="item" effect="dark" :content="row[col.prop]" placement="top" :disabled="!col.showTip">
                            <span>{{ row[col.prop] }}</span>
                        </el-tooltip>
                    </template>
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
import useListener from './useListener'
import useEdit from './useEdit'
import useSortable from './useSortable'
import usePagination from './usePagination'
import EditCell from './EditCell.vue'
import { VALUE_CHANGE } from './eventName'
export default {
    name: 'Table',
    mixins: [useInit, useTable, useListener, useEdit, useSortable, usePagination],
    props,
    components: { EditCell },
    data() {
        return {
            VALUE_CHANGE
         }
    }
}
</script>

<style scoped>
.table-pagination{
    padding: 10px  0;
    text-align: right;
}
</style>
<style>
._table-header .el-table__cell{
    background-color: #f0f0f0 !important;
    padding: 5px 0 !important;
    color: #333;
    font-weight: normal;
    font-size: 13px;
}
._table-cell{
    padding: 0 !important;
    height: 40px;
}
._table-ghost{
    background: #d4f3ff !important;
}
</style>