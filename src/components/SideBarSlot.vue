<script setup>
import Header from "./Header.vue";
import Sidebar from "@/components/Sidebar.vue"
</script>

<template>
    <div class="row bg-white vh-100">
        <div class="col-12 col-lg-2">
            <sidebar />
        </div>
        <div class="col-12 col-lg-10">
            <Header/>
            <div class="card">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    --bs-gutter-x: 0;
}
.card {
    background-color: #e5e7eb;
    height: 100%;
    padding: 16px;
}
</style>
