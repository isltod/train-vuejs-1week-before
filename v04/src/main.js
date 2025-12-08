import { createApp } from 'vue'
import App from './App.vue'
import GlobalChild from './components/GlobalChild.vue'

const app = createApp(App)
app.component("GlobalComponent", GlobalChild)
app.mount('#app')
