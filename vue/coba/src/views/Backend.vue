<template>
    <div>
        <v-container>
            <h1>Data Pendaftaran Backend</h1>
            <v-list-item v-for="orang in filterUsers" :key="orang.nama">
                <v-list-item-content>
                    <v-list-item-title>Nama: {{orang.nama}}</v-list-item-title>
                    <v-list-item-title>Alamat: {{orang.alamat}}</v-list-item-title>
                    <v-list-item-title>Program: {{orang.program}}</v-list-item-title>
                    <v-list-item-title>Status: {{orang.status}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-container>
    </div>
</template>

<script>
export default {
    computed: {
        filterUsers() {
            return this.$store.state.users.filter((orang) =>{
            if (orang.diterima === false) {
                orang.status = 'belum diterima'
            } else {
                orang.status = 'diterima'
            }
            return orang.program === 'Backend'
            })
        }
    }
}
</script>