<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Главная админки</div>

            <div class="card-body">
                Контент админки главная
                <router-link :to="{name: 'home'}">Главная</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>

</style>
