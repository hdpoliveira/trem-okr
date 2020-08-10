<template>
    <v-container>
        <v-treeview :items="items" hoverable dense>
            <template v-slot:label="{ item }">
                <v-text-field
                    :value="item.name"
                    single-line
                    solo
                    hide-details
                    dense
                    @keydown.enter="enter(item, $event.target.value)"
                    @keydown.esc="esc(item, $event.target.value)"
                    @blur="blur(item, $event.target.value)"
                ></v-text-field>
            </template>
            <template v-slot:append="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn icon large v-on="on" @click="addChild(item)"
                            ><v-icon>mdi-text-box-plus-outline</v-icon></v-btn
                        >
                    </template>
                    <span>Add task</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn icon large v-on="on" @click="removeChild(item)"
                            ><v-icon>mdi-trash-can-outline</v-icon></v-btn
                        >
                    </template>
                    <span>Remove task</span>
                </v-tooltip>
            </template>
        </v-treeview>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Task {
    id: number;
    name: string | null;
    children: Task[];
}

@Component
export default class TaskTree extends Vue {
    get items(): boolean {
        return this.$store.state.tasks.items;
    }

    private blur(item: Task, value: string) {
        console.log("blur");
        console.log(item);
        console.log(value);
    }

    private enter(item: Task, value: string) {
        console.log("enter");
        console.log(item);
        console.log(value);
    }

    private esc(item: Task, value: string) {
        console.log("esc");
        console.log(item);
        console.log(value);
    }

    private addChild(item: Task) {
        const name = prompt("type something");
        if (!name) return;
        this.$store.dispatch("tasks/addChild", { id: item.id, name });
    }

    private removeChild(item: Task) {
        if (!confirm("Are you sure?")) return;
        this.$store.dispatch("tasks/removeChild", item.id);
    }
}
</script>
