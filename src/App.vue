<template>
    <v-app>
        <AppBar />

        <v-main>
            <HelloWorld />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import AppBar from "./components/AppBar.vue";

@Component({
    components: {
        AppBar,
        HelloWorld,
    },
})
export default class App extends Vue {}
</script>
