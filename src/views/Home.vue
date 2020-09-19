<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      Devices: {{ allDevices.count }}
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: mapGetters(['allDevices'])
}
</script>
