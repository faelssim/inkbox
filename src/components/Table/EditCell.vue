<!--
 * @Author: wangkun
 * @Date: 2021-12-03 14:44:20
 * @LastEditTime: 2021-12-03 16:36:41
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div @click="handleCellClick" @mousedown="handleMousedownCell">
        <component
            class="_table-cell-component"
            v-if="editable"
            v-model="value"
            size="mini"
            :is="name"
            :ref="refName"
            @blur="handleCellBlur"
        >
            <template v-if="name === 'el-select'">
                <el-option
                    v-for="item of optionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </template>
        </component>
        <template v-else>{{ row[prop] }}</template>
    </div>
</template>
<script>
// let timeoutId = null
import { SET_EDIT_CELL, VALUE_CHANGE } from './eventName'
export default {
    props: {
        name: String,
        editable: Boolean,
        row: Object,
        prop: String,
        index: Number,
        required: Boolean,
    },
    data() {
        return {
            isResolveBlur: true,
            oldValue: ''
        }
    },
    watch: {
        editable(nv) {
            nv && this.$nextTick(() => {
                this.setRefFocus()
            })
        }
    },
    computed: {
        refName() {
            return `${this.prop}_${this.index}`
        },
        value: {
            get() {
                return this.row[this.prop]
            },
            set(nv) {
                const { prop, index } = this
                this.$emit(VALUE_CHANGE, {
                    value: nv,
                    prop,
                    index
                })
            }
        },
        optionData() {
            return this.$attrs.options.data
        }
    },
    methods: {
        emitEditEvent(eventName = '', payload) {
            eventName && this.$eventBus.$emit(eventName, payload)
        },
        setRefFocus() {
            this.$refs[this.refName].focus && this.$refs[this.refName].focus()
        },
        handleMousedownCell() {
            this.oldValue = this.row[this.prop]
            this.isResolveBlur = false
        },
        handleCellBlur() {
            if (this.isResolveBlur) {
                this.required && this.row[this.prop] === '' && this.$emit(VALUE_CHANGE, {
                    value: this.oldValue,
                    prop: this.prop,
                    index: this.index
                })
                this.emitEditEvent(SET_EDIT_CELL, {
                    prop: '',
                    index: ''
                })
            }
        },
        handleCellClick() {
            const { index, prop } = this
            // 编辑当前单元格
            this.emitEditEvent(SET_EDIT_CELL,  {
                prop,
                index
            })
            this.isResolveBlur = true
        },
    }
}
</script>
<style lang="less" scoped>
._table-cell-component{
    width: 100%;
}
</style>