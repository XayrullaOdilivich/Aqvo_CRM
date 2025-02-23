<script setup>
import { ref, computed, watch } from "vue";
import SideBarSlot from "@/components/SideBarSlot.vue";

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const selectedMonth = ref(currentMonth);
const selectedYear = ref(currentYear);

const daysInSelectedMonth = computed(() => {
    return new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate();
});

const isNextMonthAvailable = computed(() => {
    return (
        selectedYear.value < currentYear ||
        (selectedYear.value === currentYear && selectedMonth.value < currentMonth)
    );
});

const employees = ref([
    { id: 1, fullName: "Behruzbek Rasulov", attendance: [] },
    { id: 2, fullName: "Xayrulla Ochildiyev", attendance: [] },
    { id: 3, fullName: "Azizbek Usmonov", attendance: [] },
]);

function generateRandomAttendance() {
    const daysInMonth = daysInSelectedMonth.value;
    return Array.from({ length: daysInMonth }, () => Math.random() > 0.3);
}

watch([selectedMonth, selectedYear], () => {
    employees.value.forEach((employee) => {
        employee.attendance = generateRandomAttendance();
    });
}, { immediate: true });

const previousMonth = () => {
    if (selectedMonth.value === 0) {
        selectedMonth.value = 11;
        selectedYear.value -= 1;
    } else {
        selectedMonth.value -= 1;
    }
};

const nextMonth = () => {
    if (isNextMonthAvailable.value) {
        if (selectedMonth.value === 11) {
            selectedMonth.value = 0;
            selectedYear.value += 1;
        } else {
            selectedMonth.value += 1;
        }
    }
};
</script>

<template>
    <side-bar-slot>
        <div class="container-fluid">
            <h1>Hodimlar davomadi</h1>
            <div class="attendance-container">
                <h2>{{ selectedMonth + 1 }}- oy. {{ selectedYear }}-yil </h2>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Full Name</th>
                            <th v-for="day in daysInSelectedMonth" :key="day">{{ day }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="employee in employees" :key="employee.id">
                            <td>{{ employee.fullName }}</td>
                            <td v-for="(present, index) in employee.attendance" :key="index">
                                <span v-if="present" class="check-icon">✔</span>
                                <span v-else class="cross-icon">✖</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination">
                    <button @click="previousMonth" class="btn btn-secondary">⬅ Oldingi Oy</button>
                    <button @click="nextMonth" class="btn btn-secondary" :disabled="!isNextMonthAvailable">
                        Keyingi Oy ➡
                    </button>
                </div>
            </div>
        </div>
    </side-bar-slot>
</template>


<style scoped>
.container-fluid {
    background-color: white;
    height: 100%;
    padding: 20px;
}

.attendance-container {
    text-align: center;
    padding: 20px;
}

.table-responsive {
    overflow-x: auto;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 10px;
}

.table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
}

.check-icon {
    color: green;
    font-size: 18px;
}

.cross-icon {
    color: red;
    font-size: 18px;
}

.pagination {
    margin-top: 20px;
}

.pagination button {
    margin: 5px;
    background-color: blue;
}
</style>
