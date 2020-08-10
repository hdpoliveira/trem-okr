import { Module } from "vuex";

interface Task {
    id: number;
    name: string | null;
    children: Task[];
}

interface State {
    items: Task[];
    nextId: number;
}

function treeTraverse(items: Task[], fn: { (arg0: Task): any }) {
    const root = {
        id: -1,
        name: null,
        children: items,
    } as Task;
    return fn(root);
}

function find(id: number, node: Task): Task | undefined {
    if (node.id === id) {
        return node;
    }
    for (const childIdx in node.children) {
        const child = node.children[childIdx];
        const p = find(id, child);
        if (p) {
            return p;
        }
    }
    return undefined;
}

function findParentOf(
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
}

const state = {
    items: [
        {
            id: 1,
            name: "Applications :",
            children: [
                { id: 2, name: "Calendar : app", children: [] },
                { id: 3, name: "Chrome : app", children: [] },
                { id: 4, name: "Webstorm : app", children: [] },
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
                                { id: 8, name: "index : ts", children: [] },
                                {
                                    id: 9,
                                    name: "bootstrap : ts",
                                    children: [],
                                },
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
                                {
                                    id: 12,
                                    name: "v-btn : ts",
                                    children: [],
                                },
                                {
                                    id: 13,
                                    name: "v-card : ts",
                                    children: [],
                                },
                                {
                                    id: 14,
                                    name: "v-window : ts",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    nextId: 20,
};

const tasks: Module<State, any> = {
    namespaced: true,
    state,

    actions: {
        addChild({ commit }, payload) {
            commit("addChild", payload);
        },

        removeChild({ commit }, id: number) {
            commit("removeChild", id);
        },
    },

    mutations: {
        addChild(state: State, { id, name }: { id: number; name: string }) {
            const p = treeTraverse(state.items, (node: Task) => find(id, node));
            console.log(p);
            if (!p) return;
            if (!p.children) {
                p.children = [];
            }
            const newId = state.nextId++;
            p.children.push({
                id: newId,
                name,
                children: [],
            });
        },

        removeChild(state: State, id: number) {
            const p = treeTraverse(state.items, (node: Task) =>
                findParentOf(id, node)
            );
            p?.parentNode.children.splice(p.childIdx, 1);
        },
    },
};

export default tasks;
