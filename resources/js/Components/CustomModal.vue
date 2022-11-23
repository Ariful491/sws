<script setup>
import { Link }  from '@inertiajs/inertia-vue3';

defineProps({
     item:Object
});
</script>


<template>
    <div class="relative z-10" aria-labelledby="modal-title" v-if="item" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-xl">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="px-3 mr-4 py-5  ">
                                <ul class="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                     ID
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                 {{item.id}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    City
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{ item.city }}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    City Ascii

                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{ item.city_ascii }}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    State Id
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.state_id}}
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                         <div class="px-3 mr-4 py-5  ">
                                <ul class="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    State Name
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{ item.state_name }}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    County Fips

                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.countu_filps}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    County Name
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.county_name}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Latitude
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.lat}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="px-3 mr-4 py-5  ">
                                <ul class="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Longitude
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{ item.lng }}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Population
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.population}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Density

                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.density}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Source
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.source}}
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div class="px-3 mr-4 py-5  ">
                                <ul class="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Military
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.military}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Incorporated
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.incorporated}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Timezone

                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.timezone}}
                                            </div>
                                        </div>
                                    </li>
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Ranking


                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{item.ranking}}
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div class="px-3 mr-4 py-5  ">
                                <ul class="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                                    <li class="px-2 py-3 m-2  shadow  rounded-lg sm:pb-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="font-extrabold text-gray-900 truncate dark:text-gray-400">
                                                    Zips
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {{ item.zips }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="item=''" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
