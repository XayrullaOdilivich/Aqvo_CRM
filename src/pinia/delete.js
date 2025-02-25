import { defineStore } from "pinia";
import axios from "@/pinia/axios.js";

export const useDelete = defineStore("useDelete", {
    actions: {
        async Delete(url) {
            try {
                const response = await axios.delete(url);

                console.log("Serverdan javob:", response.data);
                return response.data;
            } catch (error) {
                console.error("Xato yuz berdi:", error);
                throw error;
            }
        },
    },
});
