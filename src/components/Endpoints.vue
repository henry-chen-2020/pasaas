<template>
  <v-card>
    <v-card-title class="mt-n4 mb-n4">
      <h3 class="text--secondary font-weight-regular">Endpoint Inventory</h3>
      <v-spacer></v-spacer>
      <v-icon class="mt-4 mr-1">mdi-filter</v-icon>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
      </v-text-field>
    </v-card-title>

    <v-data-table :items="allDevices.endpoints" :headers="headers" item-key="epid" show-select :single-select="singleSelect"
      :items-per-page="15" :search="search"
      :footer-props="{ 'items-per-page-options': [5, 15, 30, 90] }">
      <template #[`item.epid`]="{value}">
        <UniqueID :id="value" />
      </template>
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
import { MAC_Address, Source, Timestamp, UniqueID, ViewDetail } from '@/components/renderer'
export default {
  name: "Endpoints",
  components: { MAC_Address, Source, Timestamp, UniqueID, ViewDetail },
  data() {
    return {
      search: '',
      singleSelect: false
    }
  },
  computed: {
    ...mapGetters(['allDevices']),
    headers() {
      return [
        { text: 'Endpoint Id (copy)', value: 'epid', width: 150, align: "end", divider: true },
        { text: 'Sources', value: 'sources', divider: true },
        { text: 'Device Name', value: 'attributes.device_name.val', divider: true},
        { text: 'Hostname', value: 'attributes.hostname.val', divider: true },
        { text: 'Model', value: 'attributes.iModel.val', divider: true },
        { text: 'MAC Address', value: 'attributes.mac_addr.val', divider: true },
        { text: 'Username', value: 'attributes.username.val', divider: true },
        { text: 'Creation Time (local)', value: 'create_time', width: 200, divider: true },
        { text: 'Actions', value: 'actions', divider: true }
      ]
    }
  }
}
</script>
