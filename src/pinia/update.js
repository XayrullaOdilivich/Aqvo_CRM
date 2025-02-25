import { defineStore } from "pinia";
import api from "@/pinia/axios.js";

export const useUpdateStore = defineStore("updateStore", {
    actions: {
        async fetchPut(url, data, config = {}) {
            try {
                const response = await api.put(url, data, config);
                console.log("Serverdan javob:", response.data);
                return response.data;
            } catch (error) {
                console.error("Xato yuz berdi:", error);
                throw error;
            }
        },
    },
});
