<template>
  <div class="text-left">
    <v-dialog v-model="dialog" width="1500">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" color="light-blue" title="All Attributes">
          mdi-note-multiple
        </v-icon>
      </template>

      <v-card>
        <v-card-title class="headline">
          Attributes
        </v-card-title>
        <v-card-text class="pa-0">
          <Attributes :data="data" />
        </v-card-text>
        <v-card-actions class="blue-grey lighten-5">
          <v-spacer></v-spacer>
          <v-btn color="primary ma-4" @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Attributes from './Attributes'
export default {
  components: {
    Attributes
  },
  props: ['data'],
  data() {
    return {
      dialog: false
    }
  }
}
</script>
