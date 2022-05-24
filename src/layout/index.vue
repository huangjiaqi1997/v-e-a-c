<template>
  <div class="bdr whfull">
    <sidebar class="fl" />
    <div class="fr">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
}
</script>
