import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button, Card, SpeedDial} from "primevue";

const app = createApp(App);
app.component('Button', Button)
app.component('Card', Card)
app.component('SpeedDial', SpeedDial)

app.mount('#app')
