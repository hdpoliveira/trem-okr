<template>
    <div class="home">
        <img alt="Trem logo" src="@/assets/logo.svg" />
        <TaskTree />
    </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import TaskTree from "@/components/TaskTree.vue";

@Component({
    components: {
        TaskTree,
    },
})
export default class Home extends Vue {}
</script>
