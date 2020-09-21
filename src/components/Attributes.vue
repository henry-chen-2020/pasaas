<template>
  <v-data-table :items="attrs" :headers="headers" :items-per-page="25"
    :footer-props="{ 'items-per-page-options': [10, 25, 50, 100] }">
    <template #[`item.source`]="{value}">
      <Source :source="value" />
    </template>
    <template #[`item.timestamp`]="{value}">
      <Timestamp :timestamp="value" />
    </template>
    <template #[`item.val`]="{value}">
      {{ value }}
    </template>
  </v-data-table>
</template>

<script>
import { Source, Timestamp } from '@/components/renderer'
export default {
  name: "Attributes",
  components: {
    Source, Timestamp
  },
  props: ["data"],
  computed: {
    headers() {
      return [
        { text: 'Attribute', value: 'name' },
        { text: 'Value', value: 'val' },
        { text: 'Source', value: 'source' },
        { text: 'Timestamp (local)', value: 'timestamp' }
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
