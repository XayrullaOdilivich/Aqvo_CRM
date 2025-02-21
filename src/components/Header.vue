<script setup>

const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
};
</script>

<template>
        <div class="header">
            <a role="button" @click="logout" class="menu-link">
                <div class="menu">
                    <svg class="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8L21 12M21 12L17 16M21 12H9" stroke="#667085" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                            stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Chiqish
                </div>
            </a>
        </div>
</template>

<style scoped>
.header {
    border-bottom: 1px solid #667085;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
}
.menu {
    border: 2px solid #667085;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
}

.menu:hover {
    background-color: #f5f7fa;
    border-radius: 8px;
}

a {
    color: #101828;
    font-weight: bold;
    text-decoration: none;
}

</style>