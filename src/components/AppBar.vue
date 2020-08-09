<template>
    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-toolbar-title>Trem OKR</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-img
            alt="TREM"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="40"
            :src="logo"
            width="40"
        />
        <v-btn icon large @click="toggleTheme"
            ><v-icon>mdi-theme-light-dark</v-icon></v-btn
        >
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppBar extends Vue {
    toggleDrawer() {
        this.$store.dispatch("toggleDrawer");
    }
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
    private darkLogo = require("@/assets/logo-dark.png");
    private lightLogo = require("@/assets/logo-light.png");
    get logo() {
        return this.$vuetify.theme.dark ? this.darkLogo : this.lightLogo;
    }
}
</script>

<style></style>
