
<template>
    <v-app>
        <v-container>
            <v-row class="justify-center">
                <v-col>
                    <v-card title elevation="24" class="mt-10">
                        <v-card-title>
                            <h3>Login admin</h3>
                        </v-card-title>
                        <v-form ref="form">
                            <v-alert color="error" type="error" :value='error.username'>
                                Username tidak sesuai!
                            </v-alert>
                            <v-alert color="error" type="error" :value='error.password'>
                                Password tidak sesuai!
                            </v-alert>
                            <v-alert color="error" type="error" :value='error.userpass'>
                                Username dan password tidak sesuai!
                            </v-alert>
                            <v-card-text>
                            <v-text-field color="blue" label="Username" v-model="admin.username"/>
                            <v-text-field color="blue" label="Password" 
                            :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="handleClick" v-model="admin.password"/>
                            </v-card-text>
                            <v-btn
                                color="blue"
                                text
                                @click="handleSumbit"
                            > Masuk </v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        admin: {
            username: 'ikhsan',
            password: '2020'
        },
        showPassword: false,
        error: {
            username:false,
            password:false,
            userpass:false
        }
    }),
    methods: {
        handleClick(){
            this.showPassword = !this.showPassword
        },
        handleSumbit() {
            const adminUsername = this.$store.state.admin.username
            const adminPassword = this.$store.state.admin.password
            if(this.admin.username !== adminUsername && this.admin.password !== adminPassword)  {
                this.error.userpass = true
            }else if (this.admin.username !== adminUsername) {
                this.error.username = true
            }else if (this.admin.password !== adminPassword) {
                this.error.password = true
            }else {
                this.$store.commit('setAuthentication', true)
                this.$store.dispatch("login", this.admin)
                alert('berhasil login!')
                this.$router.push('/admin')
            }
      }
   }
}
</script>
