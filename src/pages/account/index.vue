<template>
    <v-app-bar color="blue-grey-lighten-4">
        <div class="text-h6 pl-4 pr-3 text-uppercase">Account Management</div>
        <v-divider vertical length="40" class="mx-3 my-auto"></v-divider>
        <v-breadcrumbs :items="getBreadcrumbs" class="pr-13 text-subtitle-2">
            <template v-slot:title="{ item }">
                {{ item.title.toUpperCase() }}
            </template>
            <template v-slot:divider>
                <v-icon icon="mdi mdi-chevron-right" size="20"></v-icon>
            </template>
        </v-breadcrumbs>
    </v-app-bar>
    <v-main class="pa-5">
        <v-container fluid>
            <v-card flat>

            </v-card>
        </v-container>
    </v-main>
</template>
<script setup>
import { onBeforeMount, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const store = useStore();
const router = useRouter();
const route = useRoute();
const that = self;
const display = useDisplay();

const getBreadcrumbs = [
    { title: 'Home', disabled: false, href: '/Main-Menu' },
    { title: 'Account Management', disabled: false, href: '' },
    { title: 'Dashboard', disabled: false, href: '' },
];

const headers = [
    { title: 'Id', key: 'sys_id', class: 'text-center' },
    { title: 'Name', key: 'ipt_name', class: 'text-center' },
    { title: 'Description', key: 'ipt_description', class: 'text-center' },
    { title: 'Created at', key: 'created_at', class: 'text-center' },
    { title: 'Actions', key: 'actions', sortable: false, class: 'text-center' },
];

const list = ref([]);

const search = ref("");
const selected = ref([]);
const page = ref(1);
const itemsPerPage = ref(10);
const loading = ref(false);

const filteredItems = computed(() => {
    if (!search.value) return list.value;
    return list.value.filter(item =>
        Object.values(item).some(val =>
            String(val).toLowerCase().includes(search.value.toLowerCase())
        )
    );
});

const getList = async () => {
    loading.value = true; 
    try {
        const response = await axios.get("v1/user");
        list.value = response.data.data;
    } catch (error) {
        console.error("Error fetching list:", error);
    } finally {
        loading.value = false;
    }
};

onBeforeMount(async () => {
    await getList();
        store.dispatch("references/setHeaderTitle", "ARCHON");
        store.dispatch("references/setBackgroundColor", "bg-[#CD84F1]");
});
</script>