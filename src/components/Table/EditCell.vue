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
            v-if="editable"
            v-model="value"
            size="small"
            :is="name"
            :ref="refName"
            @blur="handleCellBlur"
        ></component>
        <template v-else>{{ row[prop] }}</template>
    </div>
</template>
<script>
// let timeoutId = null
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
            isResolveBlur: true
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
                this.$emit('value-change', {
                    value: nv,
                    prop,
                    index
                })
            }
        }
    },
    methods: {
        setRefFocus() {
            this.$refs[this.refName].focus()
        },
        emitEditEvent(prop = '', index = '') {
            console.log(prop)
             this.$eventBus.$emit('set-edit-cell', {
                prop,
                index
            })
        },
        handleMousedownCell() {
            this.isResolveBlur = false
        },
        handleCellBlur() {
            this.isResolveBlur && this.emitEditEvent()
        },
        handleCellClick() {
            const { index, prop } = this
            this.emitEditEvent(prop, index)
            this.isResolveBlur = true
            setTimeout(() => {
                // this.setRefFocus()
            }, 1000)
            // this.$nextTick(() => {
            //     // this.setRefFocus()
            // })
        },
    }
}
</script>