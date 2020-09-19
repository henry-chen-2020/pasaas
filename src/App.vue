<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      light
    >
      <div class="d-flex align-center">
        <v-img
          alt="Cisco Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span class="icon-cisco"></span>

        <h2>Posture</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="pa-8 mt-12 blue-grey lighten-5 light">
      <h2 class="mb-2">Endpoint Inventory</h2>
      <v-card >
        <Details />
        <Devices class="pa-4" />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Details from './components/Details';
import Devices from './components/Devices';

export default {
  name: 'App',

  components: {
    Details,
    Devices
  },

  data: () => ({
    //
  }),
};
</script>
