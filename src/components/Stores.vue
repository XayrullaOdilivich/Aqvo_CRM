<script setup>
import SideBarSlot from "@/components/SideBarSlot.vue";
import { onMounted, ref } from "vue";
import { useDynamicStore } from "@/pinia/store.js";
import { useCreateStore } from "@/pinia/create.js";
import { useToast } from "vue-toastification";
import {useDelete} from "@/pinia/delete.js";
import {useUpdateStore} from "@/pinia/update.js";

const toast = useToast();
const selectedShops = ref(null);

const showUpdateModal = ref(false)
const showCreateModal = ref(false)

const updateModal = (item) => {
    selectedShops.value = { ...item };
    showUpdateModal.value = true
};

const closedModal = () => {
    showUpdateModal.value = false;
    showCreateModal.value = false;
};
const createModal = () => {
    showCreateModal.value = true;
}

const deleteStore = useDelete()
const store = useDynamicStore();
const updateStore = useUpdateStore()
const shops = ref([]);
const create = useCreateStore();
const crateData = {
    address: '',
    name: '',
    phone: ''
};

const crateShops = async () => {
    try {
        await create.fetchPost('/stores', crateData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        toast.success("Magazinlar qo‘shildi!", { timeout: 3000 });
        closedModal();
    } catch (error) {
        console.log("Xato");
        toast.error("Magazinlar qo‘shishda xatolik!", { timeout: 5000 });
        closedModal();
    }
};

onMounted(async () => {
    await store.fetchData("shops", "/stores");
    shops.value = store.data?.shops?.data;
});

const updateShops = async (id) => {
    try {
        const updatedData = {
            category: selectedShops.value.category,
            unit: selectedShops.value.unit
        };
        await updateStore.fetchPut(`/stores/${selectedShops.value.id}`, updatedData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        closedModal()
        toast.success("Mahsulot muvaffaqiyatli o'zgartirildi!", { timeout: 3000 });

        shops.value = shops.value.map(item =>
            item.id === selectedShops.value.id ? { ...selectedShops.value } : item
        );
    } catch (error) {
        closedModal()
        toast.error("Mahsulotni o‘zgartirishda xatolik yuz berdi!", { timeout: 5000 });
    }
};

const deleteShops = async (id) => {
    if (!confirm("Haqiqatan ham ushbu mahsulotni o‘chirmoqchimisiz?")) {
        return;
    }

    try {
        await deleteStore.Delete(`/stores/${id}`);
        toast.success("Mahsulot muvaffaqiyatli o‘chirildi!", { timeout: 3000 });

        shops.value = shops.value.filter(item => item.id !== id);
    } catch (error) {
        toast.error("Mahsulotni o‘chirishda xatolik yuz berdi!", { timeout: 5000 });
    }
};
</script>

<template>
    <side-bar-slot>
        <div v-if="showUpdateModal" class="modal">
            <div class="modal-content">
                <div class="form">
                    <h1>Magazini tahrirlash</h1>
                    <label for="exampleFormControlInput1" class="form-label">Magazin Nomi</label>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Magazin nomini kiriting"
                        required
                    >
                    <label for="exampleFormControlInput1" class="form-label">Manzili</label>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Magazin manzilini kiriting"
                        required
                    >
                    <label for="exampleFormControlInput1" class="form-label">Telefon raqami</label>
                    <input
                        type="tel"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="+998 99 999 99 99"
                        required
                    >
                    <button @click="closedModal" class="btn btn-primary">Yuborish</button>
                </div>
            </div>
        </div>
        <div v-if="showCreateModal" class="modal">
            <div class="modal-content">
                <div class="form">
                    <h1>Magazin qo'shish</h1>
                    <label for="exampleFormControlInput1" class="form-label">Magazin Nomi</label>
                    <input
                        v-model="crateData.name"
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Magazin nomini kiriting"
                        required
                    >
                    <label for="exampleFormControlInput1" class="form-label">Manzili</label>
                    <input
                        v-model="crateData.address"
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Magazin manzilini kiriting"
                        required
                    >
                    <label for="exampleFormControlInput1" class="form-label">Telefon raqami</label>
                    <input
                        v-model="crateData.phone"
                        type="tel"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="+998 99 999 99 99"
                        required
                    >
                    <button @click="crateShops" class="btn btn-primary">Yuborish</button>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="header">
                <p>Magazinlar</p>
                <button type="button" @click="createModal" class="btn btn-primary add-category">Magazin qo'shish</button>
            </div>
            <div>
                <div class="table-container">
                    <table class="table table-hover">
                        <thead class="table-head">
                        <tr>
                            <th>No.</th>
                            <th>Nomi</th>
                            <th>Manzili</th>
                            <th>Telefon</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Makro</td>
                            <td>Seul ko'chasi, Besh-Yog`och mahallasi, Chilonzor Tumani, Toshkent, 100000, Oʻzbekiston</td>
                            <td>+998 99 999 99 99</td>
                            <td>
                                <button class="update" @click="updateModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                    </svg>
                                </button>
                                <button class="delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr v-for="(shops, idx) in shops" :key="shops.id">
                            <td>{{ idx + 1 }}</td>
                            <td>{{ shops.name }}</td>
                            <td> {{ shops.address }}</td>
                            <td>{{ shops.phone }}</td>
                            <td>
                                <button class="update" @click="updateModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                    </svg>
                                </button>
                                <button class="delete" @click="deleteShops(shops.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </side-bar-slot>
</template>

<style scoped>
.container-fluid {
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
}

h1 {
    font-weight: bold;
    font-size: 1.5rem;
}

label {
    font-weight: bold;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Qoraytirish */
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content  button {
    width: 100%;
    margin: 20px auto;

}

/* Oq rangdagi modal */
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    transform: translateY(-20%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.delete {
    border: none;
    background: none;
    color: red;
}

.update {
    border: none;
    background: none;
    color: green;
    margin-left: 5px;
}

.add-category {
    margin-left: auto;
}

.table-container {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 10px;
}


.table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
    white-space: nowrap;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
}

/* Jadval hover bo'lganda fon rangi o'zgaradi */
.table-hover tbody tr:hover {
    background-color: #e5e7eb !important;
}

.table-head {
    background-color: #e5e7eb
}

th {
    background-color: #e5e7eb !important;
    position: sticky;
    top: 0;
}
</style>
