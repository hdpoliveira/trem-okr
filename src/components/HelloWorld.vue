<template>
    <v-container>
        <v-treeview :items="items">
            <template slot="append" slot-scope="{ item }">
                <v-btn @click="addChild(item)">Add item</v-btn>
                <v-btn @click="removeChild(item)">Remove this item</v-btn>
            </template>
        </v-treeview>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                    :src="require('../assets/logo.svg')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to Vuetify
                </h1>

                <p class="subheading font-weight-regular">
                    For help and collaboration with other Vuetify developers,
                    <br />please join our online
                    <a href="https://community.vuetifyjs.com" target="_blank"
                        >Discord Community</a
                    >
                </p>
            </v-col>

            <v-col class="mb-5" cols="12">
                <h2 class="headline font-weight-bold mb-3">
                    What's next?
                </h2>

                <v-row justify="center">
                    <a
                        v-for="(next, i) in whatsNext"
                        :key="i"
                        :href="next.href"
                        class="subheading mx-3"
                        target="_blank"
                    >
                        {{ next.text }}
                    </a>
                </v-row>
            </v-col>

            <v-col class="mb-5" cols="12">
                <h2 class="headline font-weight-bold mb-3">
                    Important Links
                </h2>

                <v-row justify="center">
                    <a
                        v-for="(link, i) in importantLinks"
                        :key="i"
                        :href="link.href"
                        class="subheading mx-3"
                        target="_blank"
                    >
                        {{ link.text }}
                    </a>
                </v-row>
            </v-col>

            <v-col class="mb-5" cols="12">
                <h2 class="headline font-weight-bold mb-3">
                    Ecosystem
                </h2>

                <v-row justify="center">
                    <a
                        v-for="(eco, i) in ecosystem"
                        :key="i"
                        :href="eco.href"
                        class="subheading mx-3"
                        target="_blank"
                    >
                        {{ eco.text }}
                    </a>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TaskModel from "@/models/TaskModel";

export default Vue.extend({
    name: "HelloWorld",

    data: () => ({
        ecosystem: [
            {
                text: "vuetify-loader",
                href: "https://github.com/vuetifyjs/vuetify-loader",
            },
            {
                text: "github",
                href: "https://github.com/vuetifyjs/vuetify",
            },
            {
                text: "awesome-vuetify",
                href: "https://github.com/vuetifyjs/awesome-vuetify",
            },
        ],
        importantLinks: [
            {
                text: "Documentation",
                href: "https://vuetifyjs.com",
            },
            {
                text: "Chat",
                href: "https://community.vuetifyjs.com",
            },
            {
                text: "Made with Vuetify",
                href: "https://madewithvuejs.com/vuetify",
            },
            {
                text: "Twitter",
                href: "https://twitter.com/vuetifyjs",
            },
            {
                text: "Articles",
                href: "https://medium.com/vuetify",
            },
        ],

        items: [
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
        ],
        whatsNext: [
            {
                text: "Explore components",
                href: "https://vuetifyjs.com/components/api-explorer",
            },
            {
                text: "Select a layout",
                href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
            },
            {
                text: "Frequently Asked Questions",
                href:
                    "https://vuetifyjs.com/getting-started/frequently-asked-questions",
            },
        ],
        nextId: 20,
    }),

    methods: {
        addChild(item: TaskModel) {
            if (!item.children) {
                this.$set(item, "children", []);
            }
            const name = prompt("type something");
            const id = this.nextId++;
            if (item.children)
                item.children.push({
                    id,
                    name,
                });
        },
        removeChild(item: { id: number; name: string; children: string[] }) {
            if (confirm("Are you sure?")) {
                const findParentOf = function (
                    id: number,
                    node: TaskModel
                ): {
                    parentNode: TaskModel | null;
                    childIdx: number;
                } {
                    if (node.children === undefined)
                        return { parentNode: null, childIdx: -1 };

                    for (const childIdx in node.children) {
                        if (node.children[childIdx].id == id) {
                            // Why childIdx is a string?
                            return {
                                parentNode: node,
                                childIdx: Number(childIdx),
                            };
                        }
                        const p = findParentOf(id, node.children[childIdx]);
                        if (p.childIdx != -1) {
                            return p;
                        }
                    }
                    return { parentNode: null, childIdx: -1 };
                };
                const root = { id: -1, name: "", children: this.items };
                const p = findParentOf(item.id, root);
                if (p && p.parentNode && p.parentNode.children) {
                    p.parentNode.children.splice(p.childIdx, 1);
                }
            }
        },
    },
});
</script>
