<template>
  <span class="text-truncate">
    {{ id.substr(0, 8) }}
    <v-icon @click="doCopy" title="Copy to clipboard">
      mdi-clipboard-multiple-outline
    </v-icon>
    <v-snackbar v-model="success" :timeout="timeout" color="success">
      Endpoint ID copied to clipboard
    </v-snackbar>
    <v-snackbar v-model="failure" :timeout="timeout" color="error">
      Failed to copy to clipboard
    </v-snackbar>
  </span>
</template>

<script>
export default {
  name: "UniqueID",
  props: ['id'],
  data: () => ({
    success: false,
    failure: false,
    timeout: 2000
  }),
  methods: {
    doCopy: function () {
      this.$copyText(this.id).then(() => {
        this.success = true
      }, () => {
        this.failure = true
      })
    }
  }
}
</script>