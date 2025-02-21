<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import IconStetistika from "@/components/icons/iconStetistika.vue";

const isSidebarVisible = ref(false);
const router = useRouter();

const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};

const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
};
</script>

<template>
    <div class="inner-navbar">
        <LogoComponent />
        <button @click="toggleSidebar" class="toggle-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H15M3 6H21M3 18H21" stroke="#667085" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
            </svg>
        </button>
    </div>

    <div :class="['sidebar', { active: isSidebarVisible }]">
        <div class="list-group">
            <div>
                <img src="/img.png" alt="img" class="logo">
            </div>
            <router-link to="/" class="menu-link">
                <div class="menu">
                    <svg
                         stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                         stroke-linecap="round" stroke-linejoin="round" class="ant-menu-item-icon"
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 20px;">
                        <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z">
                        </path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4">
                        </path><path d="M9 12v-4"></path><path d="M12 12v-1"></path><path d="M15 12v-2">
                        </path><path d="M12 12v-1"></path>
                    </svg>
                    Statistika
                </div>
            </router-link>
            <router-link to="/" class="menu-link">
                <div class="menu">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
                         class="ant-menu-item-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                         style="font-size: 20px;"><path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7
                             14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2
                             54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8
                             1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4
                             9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1
                             23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
                    ></path>
                    </svg>
                    Ombor
                </div>
            </router-link>
            <router-link to="/" class="menu-link">
                <div class="menu">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                         class="ant-menu-item-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                         style="font-size: 20px;"><path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609
                             3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37
                             2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0
                             5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0
                             1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0
                             0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0
                             .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0
                             0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1
                             1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5">
                         </path>
                    </svg>
                    Magazinlar
                </div>
            </router-link>
            <router-link to="/" class="menu-link">
                <div class="menu">
                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"
                         class="ant-menu-item-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                         style="font-size: 20px;"><path stroke-linecap="round" stroke-linejoin="round"
                         d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125
                            0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318
                            0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12
                            6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25
                            0 2.625 2.625 0 0 1 5.25 0Z"></path>
                    </svg>
                    Hodimlar
                </div>
            </router-link>
            <router-link to="/" class="menu-link">
                <div class="menu">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                         fill-rule="evenodd" class="ant-menu-item-icon" height="1em"
                         width="1em" xmlns="http://www.w3.org/2000/svg" style="font-size: 20px;">
                        <path d="M320 30.02c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H16c-8.837
                            0-16-7.164-16-16v-304c0-8.837 7.163-16 16-16zm-52 68H68v200h200zm493.333 87.686c6.248 6.248
                            6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627
                            0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248
                            16.378-6.248 22.627 0zm-84.853 11.313L569 89.54 461.52 197.02 569 304.5zM320
                            430.02c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-304c0-8.836
                            7.163-16 16-16zm-52 68H68v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16
                            16H416c-8.837 0-16-7.163-16-16v-304c0-8.836 7.163-16 16-16zm-52 68H468v200h200z"
                            transform="translate(144 113.98)">
                        </path>
                    </svg>
                    Tayyor mahsulotlar
                </div>
            </router-link>
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
    </div>
    <div :class="['content', { shifted: isSidebarVisible }]"></div>
</template>

<style scoped>
.toggle-button {
    background: none;
    border: none;
    cursor: pointer;
}

.sidebar {
    display: flex;
    flex-direction: column;
    top: 57px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, height 0.3s ease;
    z-index: 10;
}

.sidebar.active {
    transform: translateY(0);
}

.sidebar.collapsed {
    transform: translateY(-100%);
}

.list-group {
    width: 100%;
    padding: 0 15px;
}

.inner-navbar {
    display: none;
}

.menu {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
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

svg {
    color: #667085;
    margin-right: 10px;
    width: 18px;
}

.logo {
    margin: 20px 20px 20px 10px;
    width: 150px;
}

@media (max-width: 991px) {
    .sidebar {
        width: 100%;
        position: absolute;
        height: 0;
        overflow: hidden;
    }

    .sidebar.active {
        height: 225px;
        transform: translateY(0);
    }

    .logo {
        display: none;
    }

    .inner-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .content {
        transition: margin-top 0.3s ease;
    }

    .content.shifted {
        margin-top: 225px;
    }
}

@media (min-width: 992px) {
    .sidebar {
        height: 100%;
        transform: none;
        position: relative;
        left: 0;
        top: 0;
    }
}
</style>
