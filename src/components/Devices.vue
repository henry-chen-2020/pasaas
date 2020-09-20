<template>
  <v-card>
    <v-card-title>
      <h2 class="text--secondary font-weight-light mb-2">Endpoint Inventory</h2>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Serach" single-line hide-details>
      </v-text-field>
    </v-card-title>

    <v-data-table :items="allDevices.endpoints" :headers="headers" show-select single-select
      :items-per-page="15" :search="search"
      :footer-props="{
        'items-per-page-options': [5, 15, 30, 90]
      }">
      <template #[`item.sources`]="{value}">
        <span v-for="source in value" :key="source">
          <Source :source="source" />
        </span>
      </template>
      <template #[`item.attributes.mac_addr.val`]="{value}">
        {{ value && value[0] }}
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn v-if="value && value.length > 1" v-bind="attrs" v-on="on" rounded x-small class="ml-3">
              {{ value.length - 1 }}
            </v-btn>
          </template>
          <span>{{ value && value.slice(1) }}</span>
        </v-tooltip>
      </template>
      <template #[`item.create_time`]="{value}">
        {{ value | moment("YYYY/MM/DD:HH:mm:ss") }}
      </template>
      <template #[`item.actions`]="{item}">
        <Details :data="item.attributes" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import Details from './Details'
import Source from './Source'

export default {
  name: "Devices",
  components: {
    Details,
    Source
  },
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
        { text: 'Model', value: 'attributes.model.val' },
        { text: 'MAC Address', value: 'attributes.mac_addr.val' },
        { text: 'Username', value: 'attributes.username.val' },
        { text: 'Created Time', value: 'create_time' },
        { text: 'Actions', value: 'actions' }
      ]
    }
  }
}
</script>
