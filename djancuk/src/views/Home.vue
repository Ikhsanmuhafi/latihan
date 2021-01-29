<template>
  <app>
    <v-container>
      <v-row justify="center">
        <v-layout style="margin-top: 100px">
          <v-flex sm12 md4>
            <v-card c0 class="card shadow">
              <v-col md="12">
                <v-row justify="center">
                  <v-col md="12">
                    <v-text-field
                      type="text"
                      label="username"
                      prepend-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                      type="password"
                      label="Password"
                      prepend-icon="mdi-key"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-col>
                  <v-btn color="primary" text> login </v-btn>
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="green" text v-bind="attrs" v-on="on">
                        Daftar
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">User Profile</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Legal first name*"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Legal middle name"
                                hint="example of helper text only on focus"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Legal last name*"
                                hint="example of persistent helper text"
                                persistent-hint
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Email*"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Password*"
                                type="password"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-select
                                :items="['0-17', '18-29', '30-54', '54+']"
                                label="Age*"
                                required
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-autocomplete
                                :items="[
                                  'Skiing',
                                  'Ice hockey',
                                  'Soccer',
                                  'Basketball',
                                  'Hockey',
                                  'Reading',
                                  'Writing',
                                  'Coding',
                                  'Basejump',
                                ]"
                                label="Interests"
                                multiple
                              ></v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
                <v-container>
                  <p>
                    Lupa password?
                    <router-link to="lupa-password">klik disini</router-link>
                  </p>
                </v-container>
              </v-col>
            </v-card>
          </v-flex>
        </v-layout>
           
      </v-row>
    </v-container>
  </app>
</template>


<script>
export default {
  data: () => ({
    // reveal: false,
    dialog: false,
  }),
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
