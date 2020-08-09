<template>
    <v-app>
        <NavigationMenu v-bind="drawer" />

        <AppBar v-bind="drawer" />

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "./components/AppBar.vue";
import NavigationMenu from "./components/NavigationMenu.vue";

@Component({
    components: {
        AppBar,
        NavigationMenu,
    },
})
export default class App extends Vue {}
</script>
