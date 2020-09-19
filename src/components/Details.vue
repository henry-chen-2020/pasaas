<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activitors="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          detail
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey">
          Attributes
        </v-card-title>
        <v-card-text>
          Details
        </v-card-text>
        <v-card-actions>
          <v-space></v-space>
          <v-btn color="primary" @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>