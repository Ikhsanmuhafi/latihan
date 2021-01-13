<template>
    <nav>
        <v-navigation-drawer
        dense
        v-model="drawer" app>
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    praxis academy
                </v-list-item-title>
                <v-list-item-subtitle>program</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item-group active-class="deep-purple--text text--accant-4">
                    <v-list-item v-for="item in items" :key="item.title" :to="item.route">
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn
            color="white"
            link to="/">
            <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn
            color="white"
            link to="/register">
            <v-icon>mdi-account-plus</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            color="blue"
            dark
            link to="/login">login</v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
  export default {
    data: () => {
      return {
        drawer: false,
        register: '/register',
        items: [
          {title: 'Frontend', icon: 'mdi-laptop', route: '/frontend'},
          { title: 'Backend', icon: 'mdi-monitor', route: '/backend' },
          {title: 'Mobile', icon: 'mdi-cellphone', route: '/mobile'}
          ]
      }
    }
  }
</script>