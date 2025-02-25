import { defineStore } from 'pinia';
import axios from './axios.js';

export const useDynamicStore = defineStore('dynamic', {
    state: () => ({
        data: {}
    }),

    actions: {
        async fetchData(key, url) {
            if (!this.data[key]) this.data[key] = [];
            const res = await axios.get(url);
            this.data[key] = res.data;
            console.log(this.data[key]);
        }
    }
});
