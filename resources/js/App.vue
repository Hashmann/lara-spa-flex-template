<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script>
import HomeMainLayout from "./layouts/home/MainLayout.vue";
import AdminMainLayout from './layouts/admin/MainLayout.vue'
export default {
    name: "App",
    computed: {
        layout() {
            return (this.$route.meta.layout || 'admin') + '-layout'
        }
    },
    components: {
        HomeMainLayout,
        AdminMainLayout
    }
}
</script>

<style scoped>

</style>
