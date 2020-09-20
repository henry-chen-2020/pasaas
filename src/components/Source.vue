<template>
  <v-btn :color="`${colorMap(source)}`" small class="mr-2">{{ source }}</v-btn>
</template>

<script>
export default {
  props: ['source'],
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
  }  
}
</script>

<style scoped>
.v-btn {
  cursor: auto;
}
</style>
