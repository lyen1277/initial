import Vue from 'vue'
import { Toast, Button, Grid, GridItem, Field, Cell, CellGroup, Image as VanImage, NavBar, DatetimePicker, Icon } from 'vant'
// 按钮
Vue.use(Button)
// 九宫格
Vue.use(Grid).use(GridItem)
// 输入框
Vue.use(Field)
// 单元格
Vue.use(Cell)
Vue.use(CellGroup)
// 图片
Vue.use(VanImage)
// 导航栏
Vue.use(NavBar)
// 时间
Vue.use(DatetimePicker)
// icon
Vue.use(Icon)
// 轻提示
Vue.use(Toast)
