<template>
    <top-bar></top-bar>
    <main class="main wrapper__main">
        <set-books
            v-for="category in categories"
            :key="category.id"
            :category="category"
        ></set-books>
    </main>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import TopBar from "../components/TopBar.vue";
import SetBooks from "../components/SetBooks.vue";

import { onMounted } from "@vue/runtime-core";

import { useStore } from "vuex";
import { computed } from "vue";

import { IBookCategories } from "../types/bookCategories.interface"

export default defineComponent({
    components: {
        TopBar,
        SetBooks,
    },
    setup() {
        const categories = computed<IBookCategories[]>(() => store.state.allCategories)
        const store = useStore();

        onMounted(() => {
            store.dispatch("getAllCategories")
        });

        return { categories };
    },
});
</script>

<style scoped lang="scss">
@import "../styles/main.scss";
.main {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 60px;
}
</style>
