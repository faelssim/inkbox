const util = {
    colorfulLog(text, color = 'deepskyblue') {
        if (typeof text === 'string') {
            console.log(`%c${text}`, `background: ${color};padding: 2px 7px;border-radius: 3px;font-size: 12px;color: #fff;`)
        } else {
            console.dir(text)
       }
    }
}
export default util