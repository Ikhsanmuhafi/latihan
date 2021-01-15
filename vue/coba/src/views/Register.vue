<template>
    <v-app>
        <v-container>
            <v-row class="justify-center">
                <v-col>
                    <v-card title elevation="24" class="mt-10">
                        <v-card-title>
                            <h3>Regitrasi</h3>
                        </v-card-title>
                        <v-form ref="form">
                            <v-card-text>
                                <v-text-field color="blue" label="Nama" v-model="people.nama" :rules="namaRules"/>
                                <v-text-field color="blue" label="Alamat" v-model="people.alamat" :rules="alamatRules"/>
                                <!-- <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    v-model="date"
                                    label="Tanggal lahir"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                                ref="picker"
                                v-model="date"
                                :max="new Date().toISOString().substr(0, 10)"
                                min="1950-01-01"
                                @change="save"
                                ></v-date-picker>
                            </v-menu> -->
                                <v-select
                                :items="programs"
                                color="blue"
                                label="program"
                                v-model="people.program"
                                :rules="programRules"
                                dense></v-select>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="blue" dark @click="handleSumbit"> Sumbit </v-btn>
                            </v-card-actions>
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
        // date:null,
        // menu: false,
        people: {
            nama: '',
            alamat: '',
            // Lahir:'',
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
        // lahirRules: [
        //     value => value != '' || 'Ini harus diisi'
        // ],
        programRules : [
            value => value != '' || 'Program harus diisi'
        ]
    }),
    // watch: {
    //     menu(val){
    //         val && setTimeout(() =>(this.$refs.picker.activePicker = 'TAHUN'))
    //     }
    // },
    methods: {
        save (date){
            this.$refs.menu.save(date)
        },
        handleSumbit() {
            if(this.$refs.form.validate()){
                this.$store.dispatch('actionUsers', this.people)
                if (this.people.program === 'Frontend'){
                    this.$router.push({name: 'Frontend'})
                } else if(this.people.program === 'Backend'){
                    this.$router.push({name: 'Backend'})
                } else {
                    this.$router.push({name: 'Mobile'})
                }
                alert('pendaftaran berhasil masuk')
            }
        }

    }
}
</script>