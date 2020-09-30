<template>
  <div>
    <v-tooltip bottom color="primary">
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" class="mr-1">mdi-clock-outline</v-icon>
      </template>
      {{ timestamp | moment('timezone', 'utc', "YYYY/MM/DD:HH:mm:ss") }} UTC
    </v-tooltip>
    {{ timestamp | moment("YYYY/MM/DD:HH:mm:ss") }}
  </div>
</template>

<script>
export default {
  name: "Timestamp",
  props: ['timestamp']  
}
</script>
