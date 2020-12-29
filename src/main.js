import { createApp } from 'vue'
import App from './App.vue'

import vList from '../components/vList/index'
import vListItem from '../components/vList/index'
const app = createApp(App)
app.component('v-list', vList)
app.component('v-list-item', vListItem)
app.mount('#app')