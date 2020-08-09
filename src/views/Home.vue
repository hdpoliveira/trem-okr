<template>
    <div class="home">
        <v-row justify="space-around">
            <img alt="Trem logo" :src="logo" />
        </v-row>
        <TaskTree />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskTree from "@/components/TaskTree.vue";

@Component({
    components: {
        TaskTree,
    },
})
export default class Home extends Vue {
    private darkLogo = require("@/assets/logo-dark.svg");
    private lightLogo = require("@/assets/logo-light.svg");
    get logo() {
        return this.$vuetify.theme.dark ? this.darkLogo : this.lightLogo;
    }
}
</script>
