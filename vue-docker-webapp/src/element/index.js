// 导入需要的组件
import {Row, Col, Header, Button, Input, Select, Option, Pagination, Scrollbar, Tabs, TabPane, Dropdown, DropdownMenu, DropdownItem, MessageBox, Message} from 'element-ui'

Message.install = function (Vue, option) {
  Vue.prototype.$message = Message
}
const element = {
  install: function (Vue) {
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Header)
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Pagination)
    Vue.use(Scrollbar)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Message)
  }
}
export default element
