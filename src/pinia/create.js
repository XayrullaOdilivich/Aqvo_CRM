import { defineStore } from "pinia";
import api from "@/pinia/axios.js";

export const useCreateStore = defineStore("createStore", {
    actions: {
        async fetchPost(url, data, config = {}) {
            try {
                const response = await api.post(url, data, config);
                console.log("Serverdan javob:", response.data);
                return response.data;
            } catch (error) {
                console.error("Xato yuz berdi:", error);
                throw error;
            }
        },
    },
});
