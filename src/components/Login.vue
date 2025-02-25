<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/pinia/login.js';
import router from "@/router/index.js";


const authStore = useAuthStore();
const loginData = ref({ phoneNumber: '', password: '' });
const showErrorModal = ref(false);

const login = async () => {
    try {
        const token = await authStore.fetchToken(loginData.value);

        if (token) {
            console.log('Login muvaffaqiyatli! Token:', token);
            await router.push('/admin');
        } else {
            console.error("Token olinmadi!");
        }
    } catch (error) {
        console.error('Login xatosi:', error.message);
        showErrorModal.value = true;
    }
};

const closeModal = () => {
    showErrorModal.value = false;
};
</script>

<template>
    <div class="container-fluid">
        <div class="form">
            <img src="/img.png" alt="img" class="logo">
            <div class="text">Telefon raqami</div>
            <div class="input input-group input-group-sm mb-3">
                <input
                    v-model="loginData.phoneNumber"
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    required
                >
            </div>
            <div class="text">Parol</div>
            <div class="input input-group input-group-sm mb-3">
                <input
                    v-model="loginData.password"
                    type="password"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    required
                >
            </div>
            <button @click="login" class="btn btn-primary" type="submit">Yuborish</button>
        </div>
    </div>
    <div v-if="showErrorModal" class="modal">
        <div class="modal-content">
            <p class="error">Login yoki parol xato! Iltimos, qaytadan urinib ko‘ring.</p>
            <button class="btn btn-danger" @click="closeModal">OK</button>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    min-height: 100vh;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Oq rangdagi modal */
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    transform: translateY(-80%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Qizil rangdagi matn */
.error{
    color: red;
    font-weight: bold;
    font-size: 18px;
}

/* OK tugmasi */
.btn-danger {
    margin-top: 10px;
    font-weight: bold;
    width: 20%;
}

.logo {
    width: 180px;
    margin: 5% 23%;
}

.text {
    color: #222222;
    font-family: C059;
    font-weight: bold;
    margin-bottom: 5px;
}

.form {
    border: 3px solid lightgray;
    border-radius: 10px;
    width: 30%;
    height: 50%;
    margin-top: 15% !important;
    margin: auto;
    padding: 3%;
    transition: transform 0.3s ease;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
}

.form:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 1);
}

.btn {
    margin-left: 40%;
    font-weight: bold;
    font-size: 20px;
    transition: transform 0.3s ease;
}

.btn:hover {
    transform: scale(1.05);
}
</style>
