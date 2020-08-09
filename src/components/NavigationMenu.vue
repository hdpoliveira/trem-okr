<template>
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-sign-text</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// TODO make the menu change the route

@Component
export default class NavigationMenu extends Vue {
    get drawer(): boolean {
        return this.$store.state.drawer;
    }
    set drawer(value: boolean) {
        this.$store.dispatch("setDrawer", value);
    }
}
</script>
