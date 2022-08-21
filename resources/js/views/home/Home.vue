<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Главная сайта</div>

            <div class="card-body">
                Контент сайта главная
                <router-link :to="{name: 'admin'}">Админка</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>
