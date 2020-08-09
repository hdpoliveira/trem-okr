<template>
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
            <v-list-item
                link
                v-for="link in links"
                :key="link.text"
                router
                :to="link.route"
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
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
    private links = [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-sign-text", text: "About", route: "/about" },
    ];
}
</script>
