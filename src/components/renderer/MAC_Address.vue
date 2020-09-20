<template>
  <div>
    {{ addrs && addrs[0] }}
    <v-tooltip bottom color="primary">
      <template #activator="{ on, attrs }">
        <v-btn v-if="addrs && addrs.length > 1" v-bind="attrs" v-on="on" rounded x-small class="ml-3">
          {{ addrs.length - 1 }}
        </v-btn>
      </template>
      <span>{{ addrs && addrs.slice(1) }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: ['addrs']
}
</script>