import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import liff from '@line/liff';
import _ from 'lodash'

// import './assets/css/reset.css'//読み込みたいcssファイル

createApp(App).use(VueAxios, axios,liff,_).mount('#app')
