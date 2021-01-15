<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h2>Ini halaman Admin</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>
                <h3>Data Pendaftaran</h3>
                <h4>Data Pendaftran program</h4>
            <v-list v-for="orang in filterUsers" :key="orang.nama">
                <v-list-item-content>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Nama : {{orang.nama}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Alamat : {{orang.alamat}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{orang.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{orang.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="orang.diterima === false" @click="handleApprove(orang)">Terima</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(orang)">Tolak</v-btn>
                <v-btn color="error" @click="hapusUser(orang.nama)">hapus</v-btn>
            </v-list>
            <v-list v-for="orang in ilterUsers" :key="orang.nama">
                <v-list-item-content>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Nama : {{orang.nama}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Alamat : {{orang.alamat}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{orang.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{orang.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="orang.diterima === false" @click="handleApprove(orang)">Terima</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(orang)">Tolak</v-btn>
                <v-btn color="error" @click="hapusUser(orang.nama)">hapus</v-btn>
            </v-list>
            <v-list v-for="user in lterUsers" :key="user.name">
                <v-list-item-content>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Nama : {{orang.nama}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Alamat : {{orang.alamat}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{orang.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{orang.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="orang.diterima === false" @click="handleApprove(orang)">Terima</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(orang)">Tolak</v-btn>
                <v-btn color="error" @click="hapusUser(orang.nama)">hapus</v-btn>
            </v-list>
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-btn color="error" dark @click="handleLogout">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-card>
    </v-container>
</template>

<script>
export default {
    computed: {
    //  usersFrontend(){
    //   return this.$store.state.users.filter((user) => {
    //     return user.program === 'frontend'
    //   })
    // },
    filterUsers() {
       return this.$store.state.users.filter((orang) => {
         if (orang.diterima === false) {
            orang.status = 'Tolak'
         } else{
           orang.status = 'Terima'
         }
         return orang.program === 'Frontend'
       })
     },
    ilterUsers() {
       return this.$store.state.users.filter((orang) => {
         if (orang.diterima === false) {
            orang.status = 'Tolak'
         } else{
           orang.status = 'Terima'
         }
         return orang.program === 'Backend'
       })
     },
    lterUsers() {
       return this.$store.state.users.filter((orang) => {
         if (orang.diterima === false) {
            orang.status = 'Tolak'
         } else{
           orang.status = 'Terima'
         }
         return orang.program === 'Mobile'
       })
     }
   },
   methods: {
       handleApprove(orang) {
          orang.diterima = !orang.diterima
          console.log(orang)
       },
        handleLogout(){
        let logout = confirm("Apakah kamu yakin ingin keluar");

        if (logout) {
            window.location =('http://localhost:8080/#/login');
        } else {
            document.write=('http://localhost:8080/#/admin');
        }
       },

       hapusUser(userName){
         this.$store.dispatch('hapususer', userName)
       },

   }
}
</script>
