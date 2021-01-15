<template>
    <div>
        <v-container>
            <h1>Data pendataran Frontend</h1>
            <v-list-item v-for="people in filterPeople" :key="people.nama">
                <v-list-item-content>
                    <v-list-item-title>Nama: {{people.nama}}</v-list-item-title>
                    <v-list-item-title>Alamat: {{people.alamat}}</v-list-item-title>
                    <v-list-item-title>Program:{{people.program}}</v-list-item-title>
                    <v-list-item-title>Status:{{people.status}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-container>
    </div>
</template>

<script>
export default {
    computed:{
        filterPeople(){
            return this.$store.state.users.filter((people)=>{
                if (people.diterima ===false) {
                    people.status = 'Belum diterima'
                } else {
                    people.status = 'Diterima'
                }
                return people.program === 'Frontend'
            })
        }
    }
}
</script>