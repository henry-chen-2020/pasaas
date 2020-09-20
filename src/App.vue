<template>
  <v-app>
    <v-app-bar app color="white" light >
      <div class="d-flex align-center">
        <v-img alt="Cisco Logo" class="shrink mr-4" contain
          src="../src/assets/cisco-logo-1-300x151.png"
          transition="scale-transition" width="100"
        />
        <h2 class="text--secondary">Posture</h2>
      </div>
      <v-spacer></v-spacer>
      <span>
        <v-icon class="ms-4">mdi-help</v-icon>
        <v-icon class="ms-4">mdi-bell</v-icon>
        <v-icon class="ms-4">mdi-account</v-icon>
      </span>
    </v-app-bar>

    <v-main class="pa-8 mt-12 blue-grey lighten-5 light">
      <v-card>
        <Devices class="pa-2" />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Devices from './components/Devices'

export default {
  name: 'App',
  components: {
    Devices
  }
}
</script>
