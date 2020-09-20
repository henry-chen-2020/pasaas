<template>
  <div>
    <v-icon>mdi-clock-outline</v-icon>
    {{ timestamp | moment("YYYY/MM/DD:HH:mm:ss") }}
  </div>
</template>

<script>
export default {
  props: ['timestamp']  
}
</script>