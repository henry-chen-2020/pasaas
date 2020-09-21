<template>
  <v-card>
    <v-card-title class="mt-n4 mb-n4">
      <h3 class="text--secondary font-weight-regular">Endpoint Inventory</h3>
      <v-spacer></v-spacer>
      <v-icon class="mt-4 mr-1">mdi-filter</v-icon>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Serach" single-line hide-details>
      </v-text-field>
    </v-card-title>

    <v-data-table :items="allDevices.endpoints" :headers="headers" show-select single-select
      :items-per-page="15" :search="search"
      :footer-props="{ 'items-per-page-options': [5, 15, 30, 90] }">
      <template #[`item.sources`]="{value}">
        <span v-for="source in value" :key="source">
          <Source :source="source" />
        </span>
      </template>
      <template #[`item.attributes.mac_addr.val`]="{value}">
        <MAC_Address :addrs="value" />
      </template>
      <template #[`item.create_time`]="{value}">
        <Timestamp :timestamp="value" />
      </template>
      <template #[`item.actions`]="{item}">
        <ViewDetail :data="item.attributes" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { MAC_Address, Source, Timestamp, ViewDetail } from '@/components/renderer'
export default {
  name: "Endpoints",
  components: { MAC_Address, Source, Timestamp, ViewDetail },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['allDevices']),
    headers() {
      return [
        { text: 'Endpoint ID', value: 'epid' },
        { text: 'Sources', value: 'sources' },
        { text: 'Device Name', value: 'attributes.device_name.val' },
        { text: 'Hostname', value: 'attributes.hostname.val' },
        { text: 'Model', value: 'attributes.iModel.val' },
        { text: 'MAC Address', value: 'attributes.mac_addr.val' },
        { text: 'Username', value: 'attributes.username.val' },
        { text: 'Creation Time (local)', value: 'create_time' },
        { text: 'Actions', value: 'actions' }
      ]
    }
  }
}
</script>
