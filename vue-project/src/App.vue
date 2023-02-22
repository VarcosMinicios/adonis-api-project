<template>
  <q-layout view="lhr Lpr fff">
    <q-drawer v-model="openLeft" :width="200" show-if-above bordered>
      <q-list>
        <!-- <q-item clickable to="/">
          <q-item-section avatar>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item> -->

        <q-item v-for="(route, index) in router.options.routes" :key="index" :to="route.path" clickable>
          <q-item-section>
            <q-item-label>{{ route.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding class="row">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { RouterView, useRouter } from 'vue-router'
  import { ref } from 'vue'

  const openLeft = ref(true);
  const router = useRouter()

</script>