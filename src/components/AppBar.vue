<template>
    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-toolbar-title>Trem OKR</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-img
            alt="TREM"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="40"
            src="@/assets/logo.png"
            width="40"
        />
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// TODO make changing the drawer affect the navigation menu

@Component
export default class AppBar extends Vue {
    @Prop({ required: true }) readonly drawer!: boolean;
}
</script>

<style></style>
