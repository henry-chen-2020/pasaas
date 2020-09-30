<template>
  <div>
    {{ addrs && addrs[0] }}
    <v-tooltip bottom color="primary">
      <template #activator="{ on, attrs }">
        <v-chip v-if="addrs && addrs.length > 1" v-bind="attrs" v-on="on" x-small class="ml-3">
          {{ addrs.length - 1 }}
        </v-chip>
      </template>
      <span>{{ addrs && addrs.slice(1) }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "MAC_Address",
  props: ['addrs']
}
</script>
