<template>
    <div>
        <v-row>
            <v-col cols="12" offset-sm="3" sm="6">
                <v-card>
                    <v-card-title class="bg-blue">
                        <span class="text-h5"></span>
                        <v-spacer></v-spacer>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props"></v-btn>
                            </template>
                            <v-list>
                                <!-- v-for="(item, i) in items" :key="i" -->
                                <v-list-item>
                                    <v-list-item-title></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-card-text>Lorem Ipsum</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    // import { VRow, VCol, VCard, VCardTitle, VSpacer, VMenu, VBtn, VList, VListItem } from 'vuetify/lib'

    export default {
        name: 'Menus',
        // components: { VRow, VCol, VCard, VCardTitle, VSpacer, VMenu, VBtn, VList, VListItem }
    }
</script>

<style scoped>
</style>