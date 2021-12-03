/*
 * @Author: wangkun
 * @Date: 2021-12-02 13:38:29
 * @LastEditTime: 2021-12-03 14:26:53
 * @LastEditors: wangkun
 * @Description: http function
 */
import axios from 'axios'

function http (url, data, options = {}) {
    // console.log(url, data, options)
}

http.get = function (url, data) {
    http(url, data, { method: 'get' })
}

http.post = function (url, data) {
    http(url, data, { method: 'post' })
}

export default http