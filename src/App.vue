<template>
    <v-app>
        <AppBar />

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "./components/AppBar.vue";

@Component({
    components: {
        AppBar,
    },
})
export default class App extends Vue {}
</script>
