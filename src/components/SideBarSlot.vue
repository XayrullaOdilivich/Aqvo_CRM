<script setup>

import Sidebar from "@/components/Sidebar.vue"
</script>

<template>
    <div class="row bg-white vh-100">
        <div class="col-12 col-lg-3">
            <sidebar />
        </div>
        <div class="col-12 col-lg-9">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.row {
    --bs-gutter-x: 0;
}
</style>
