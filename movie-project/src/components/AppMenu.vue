<!-- TopMenu.vue -->
<template>
    <!-- A simple app bar with a nav icon, title, search bar, and action buttons -->
    <v-app-bar
      color="primary"
      dark
      flat
    >
      <!-- Optional navigation icon (to toggle a drawer, for example) -->
      <v-app-bar-nav-icon />
  
      <!-- Application title/logo text -->
      <v-toolbar-title>My Application</v-toolbar-title>
  
      <!-- Pushes subsequent elements to the right side -->
      <v-spacer />
  
      <!-- Search field -->
      <v-text-field
        v-model="searchQuery"
        solo
        flat
        hide-details
        placeholder="Search..."
        prepend-inner-icon="mdi-magnify"
        class="mr-4"
      />
  
      <!-- Example right-side icons/buttons -->
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
  
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Reactive search field value
  const searchQuery = ref('')
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  