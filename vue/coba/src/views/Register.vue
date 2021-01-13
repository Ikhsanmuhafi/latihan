<template>
    <v-app>
        <v-container>
            <v-row class="justify-center">
                <v-col>
                    <v-card tile elevation="1" class="mt-10">
                        <v-parallax>
                          <v-card-title> 
                            <h3>Registrasi</h3>
                        </v-card-title>
                        <v-form ref="form">
                            <v-card-text>
                                <v-text-field color="blue" label="Nama" v-model="orang.nama" :rules="namaRules"/>
                                <v-text-field color="blue" label="Alamat" v-model="orang.alamat" :rules="alamatRules"/>
                                <v-select
                                :items="programs"
                                color="blue"
                                label="Program"
                                v-model="orang.program"
                                :rules="programRules"
                                dense
                                ></v-select>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="blue" dark @click="handleSubmit">Submit</v-btn>
                            </v-card-actions>
                        </v-form>
                        </v-parallax>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        orang: {
                nama: '',
                alamat: '',
                program: '',
                diterima: false
              },
        programs: ['Frontend', 'Backend', 'Mobile'],
        namaRules: [
            value => value != '' || 'Nama harus diisi'
        ],
        alamatRules: [
            value => value != '' || 'Alamat harus diisi'
        ],
        programRules : [
            value => value != '' || 'Program harus diisi'
        ]
    }),
    methods: {
        handleSubmit() {
            if(this.$refs.form.validate()){
                this.$store.dispatch('actionUsers', this.orang)
                if (this.orang.program === 'Frontend') {
                    this.$router.push({name: 'Frontend'})
                } else if(this.orang.program === 'Backend') {
                    this.$router.push({name: 'Backend'})
                } else {
                    this.$router.push({name: 'Mobile'})
                }
                alert('Registrasi telah berhasil!')
            }
        }
    }
}
</script>
<style>
/* .con{
    text-align: justify;
    text-emphasis-color: black;
} */
</style>