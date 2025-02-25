import { defineStore } from 'pinia';
import axios from '@/pinia/axios.js';

export const useAuthStore= defineStore('authStore',{
    id: 'auth',
    state: () => ({
        accessToken: null,
        refreshToken: null,
    }),
    actions: {
        async fetchToken(data) {
            try {
                const response = await axios.post('/auth/sign-in', data);
                console.log('Serverdan javob', response.data.data);

                const accessToken = response.data.data.tokens.access_token;
                const refreshToken = response.data.data.tokens.refresh_token;

                if (accessToken && refreshToken) {
                    this.accessToken = accessToken;
                    this.refreshToken = refreshToken;

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);

                    console.log("Tokenlar saqlandi:", accessToken, refreshToken);
                    return accessToken;
                } else {
                    console.error("Tokenlar yo‘q!");
                    throw new Error("Tokenlar yo‘q yoki noto‘g‘ri format!");
                }

            } catch (error) {
                console.error('Xato yuz berdi:', error);
                throw error;

            }
        },
    },
    getters: {
        getToken: (state) => state.accessToken,
    },
});
