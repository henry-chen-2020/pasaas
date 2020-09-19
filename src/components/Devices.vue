<template>
  <v-data-table :items="allDevices.endpoints" :headers="headers">
    <template #[`item.sources`]="{value}">
      <span v-for="source in value" :key="source">
        <v-btn :color="`${colorMap(source)}`" small class="sl-3">{{ source }}</v-btn>
      </span>
    </template>
    <template #[`item.attributes.mac_addr.val`]="{value}">
      {{ value && value[0] }}
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn v-if="value && value.length > 1" v-bind="attrs" v-on="on" fab x-small>
            {{ value.length - 1 }}...
          </v-btn>
        </template>
        <span>{{ value && value.slice(1) }}</span>
      </v-tooltip>
      <!-- <div v-for="mac in value" :key="mac">
        {{ mac }}
      </div> -->
    </template>
    <template #[`item.create_time`]="{value}">
      {{ value | moment("YYYY/MM/DD:HH:mm:ss") }}
    </template>
    <template #[`item.actions`]="{item}">
      <!-- <v-icon @click="perform(item.epid)" color="teal" title="more..."> mdi-details</v-icon>
      <v-icon @click="perform(item.epid)" color="purple" title="more">mdi-eye</v-icon>
      <v-icon @click="perform(item.epid)" color="orange">mdi-note-multiple</v-icon> -->
      <Details :data="item.attributes" />
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'
import Details from './Details'

export default {
  name: "Devices",
  components: {
    Details
  },
  methods: {
    colorMap(source) {
      const MAP = {
        'AMP': 'cyan',
        'DUO': 'light-green',
        'ISE': 'light-blue',
        'MDM': 'amber'
      }
      return MAP[source] || 'grey'
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
