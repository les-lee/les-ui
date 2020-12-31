import { createApp } from 'vue'
import App from './App.vue'

import vList from '../components/vList/index'
import vButton from '../components/vButton'
const app = createApp(App)
app.component('v-list', vList)
app.component('v-button', vButton)
app.mount('#app')