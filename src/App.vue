<template>
  <v-app>
    <v-app-bar app color="white" light >
      <v-img alt="Cisco Logo" src="../src/assets/cisco-logo-1-300x151.png" class="shrink mr-4" width="75"/>
      <v-toolbar-title class="text-h5 text--secondary">Posaas</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <v-icon class="ms-8">mdi-help</v-icon>
        <v-icon class="ms-8">mdi-bell</v-icon>
        <v-icon class="ms-8">mdi-account</v-icon>
      </span>
    </v-app-bar>

    <v-main class="pa-4 mt-16 blue-grey lighten-5 light">
      <Endpoints class="pa-2" />
    </v-main>
  </v-app>
</template>

<script>
import Endpoints from '@/components/Endpoints'
export default {
  name: 'App',
  components: { Endpoints }
}
</script>
