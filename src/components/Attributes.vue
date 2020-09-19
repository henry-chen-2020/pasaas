<template>
  <v-data-table :items="attr" :headers="headers">
  </v-data-table>
</template>

<script>
export default {
  name: "Attributes",
  props: ["data"],
  computed: {
    headers() {
      return [
        { text: 'Attribute', value: 'name' },
        { text: 'Value', value: 'val' },
        { text: 'Source', value: 'source' },
        { text: 'Timestamp', value: 'timestamp' }
      ]
    },
    attrs() {
      const keys = Object.keys(this.data)
      return keys.map(key => {
        return {
          name: key,
          val: this.data[key].val,
          source: this.data[key].lu_source,
          timestamp: this.data[key].lu_time
        }
      })
    }
  }
}

</script>