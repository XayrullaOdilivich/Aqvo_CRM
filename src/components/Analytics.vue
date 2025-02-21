<script setup>

import SideBarSlot from "@/components/SideBarSlot.vue";
</script>

<template>
    <side-bar-slot>
        <div class="container-fluid">
            <div class="content">
                <h1>Anlitika bo'limi</h1>
                <div class="row">
                    <div class="card ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                             class="icon1 text-yellow-500 text-4xl mb-4" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg"><path d="M332.8 320h38.4c6.4 0 12.8-6.4
                             12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0
                             6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4
                             12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4
                             12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4
                             0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4
                             12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0
                             6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0
                             17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                        </svg>
                        <h3>Ishlab chiqarilgan</h3>
                        <p>Ma'lumot yuq</p>
                    </div>
                    <div class="card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="icon2 bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5
                             8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0
                             1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7
                             0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        <h3>Sotilgan</h3>
                        <p>Ma'lumot yuq</p>
                    </div>
                    <div class="card ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 288 512"
                             class="icon3 text-green-500 text-4xl mb-4" height="1em" width="3em"
                             xmlns="http://www.w3.org/2000/svg"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80
                             173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1
                             19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176
                             64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4
                             118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2
                             29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1
                             18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0
                             16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                        </svg>
                        <h3>Umumiy tushum</h3>
                        <p>Ma'lumot yuq so'm</p>
                    </div>
                </div>
                <div class="form">
                    <h3>Resurs hisoboti</h3>
                    <label for="exampleFormControlInput1" class="form-label">Mahsulotni tanlang</label>
                    <select class="form-select">
                        <option value="" selected disabled>Mahsulotni tanlang</option>
                        <option>Salom</option>
                        <option>Salom</option>
                        <option>Salom</option>
                        <option>Salom</option>
                    </select>
                    <label for="exampleFormControlInput1" class="form-label">Mahsulot miqdorini kiriting</label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        required
                    >
                    <button type="button" class="btn btn-primary">Hisobotni ko'rish</button>
                </div>
            </div>
        </div>
    </side-bar-slot>
</template>

<style scoped>
.container-fluid {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    height: 100%;
}
h1 {
    text-align: left;
    font-weight: bold;
}

p {
    font-size: 20px;
}

.icon1 {
    color:darkorange;
    width: 60px;
    height: 60px;
}
.icon2 {
   color:blue;
    width: 60px;
    height: 60px;
    margin-bottom: 23px
}
.icon3 {
   color:green;
    width: 60px;
    height: 60px;
}

.content {
    background-color: #e5e7eb;
    padding: 16px;
    min-height: 100%;
}
.card {
    display: inline-block;
    background-color: white;
    border: 1px solid #e5e7eb;
    width: 31.8%;
    height: 20%;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.form {
    display: inline-block;
    background-color: white;
    border: 1px solid #e5e7eb;
    width: 99%;
    height: 60%;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

h3 {
    font-weight: bold;
    font-size: 30px;
}
label{
    font-size: 20px;
}

select {
    background-color: #e5e7eb;
}

button {
    margin-top: 10px;
}
</style>
