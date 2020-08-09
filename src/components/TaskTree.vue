<template>
    <v-container>
        <v-treeview :items="items" hoverable dense>
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
    private items = [
        {
            id: 1,
            name: "Applications :",
            children: [
                { id: 2, name: "Calendar : app" },
                { id: 3, name: "Chrome : app" },
                { id: 4, name: "Webstorm : app" },
            ],
        },
        {
            id: 5,
            name: "Documents :",
            children: [
                {
                    id: 6,
                    name: "vuetify :",
                    children: [
                        {
                            id: 7,
                            name: "src :",
                            children: [
                                { id: 8, name: "index : ts" },
                                { id: 9, name: "bootstrap : ts" },
                            ],
                        },
                    ],
                },
                {
                    id: 10,
                    name: "material2 :",
                    children: [
                        {
                            id: 11,
                            name: "src :",
                            children: [
                                { id: 12, name: "v-btn : ts" },
                                { id: 13, name: "v-card : ts" },
                                { id: 14, name: "v-window : ts" },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    private nextId = 20;

    private addChild(item: Task) {
        console.log(item);
        if (!item.children) {
            this.$set(item, "children", []);
        }
        const name = prompt("type something");
        const id = this.nextId++;
        item.children.push({
            id,
            name,
            children: [],
        });
    }

    private removeChild(item: Task) {
        console.log(item);
        if (confirm("Are you sure?")) {
            const findParentOf = function (
                id: number,
                node: Task
            ): { parentNode: Task; childIdx: number } | undefined {
                for (const childIdx in node.children) {
                    const child = node.children[childIdx];
                    if (child.id == id) {
                        return {
                            parentNode: node,
                            childIdx: parseInt(childIdx),
                        };
                    }
                    const p = findParentOf(id, child);
                    if (p) {
                        return p;
                    }
                }
                return undefined;
            };
            const root = {
                id: -1,
                name: null,
                children: this.items,
            } as Task;
            const p = findParentOf(item.id, root);
            p?.parentNode.children.splice(p.childIdx, 1);
        }
    }
}
</script>
