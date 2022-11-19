<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue'

let  btnName = ref('Upload')
let  processing = ref(false)
let  success = ref('')
let  errorData = ref('')

defineProps({
    items: Object,
});

const form = useForm({
    excelFile: '',
});

const submit = () => {
      processing.value = true;
      btnName.value = 'uploading';
       let mainFormData =  document.getElementById('file_input');
       let data = new FormData(mainFormData);
       axios.post('/cities',data)
        .then(function (response) {
            processing.value = false;
            btnName.value = 'Done';
            success.value = response.data.success;
            console.log(response);
            document.getElementById("excel").value = null;

        })
        .catch(function (error) {
            processing.value = false;
            btnName.value = 'Fail';
            errorData.value = error.response.data.errors.excel_file[0];
            //console.log(error.response.data.errors.excel_file);
        });
};


</script>

<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                City
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white p-2  overflow-hidden shadow-sm sm:rounded-lg">
                    <div v-if="success"  class="bg-green-100 flex w-1/2 mx-auto my-5  transition-all justify-between px-3 py-3 shadow-md" role="alert">
                        <div class="h-6 transition-all text-gray-700 font-bold">
                            {{success}}
                        </div>
                        <div @click="success=''">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6  text-gray-600 font-bold cursor-pointer hover:text-gray-900 transition-all h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="errorData"  class="bg-red-100 flex w-1/2 mx-auto my-5  transition-all justify-between px-3 py-3 shadow-md" role="alert">
                        <div class="h-6 transition-all text-gray-700 font-bold">
                            {{errorData}}
                        </div>
                        <div @click="errorData=''">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6  text-gray-600 font-bold cursor-pointer hover:text-gray-900 transition-all h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <form @submit.prevent="submit" id="file_input">
                            <div class="px-4 my-3 block flex justify-center">
                                  <div class="my-auto px-6">
                                      <InputLabel for="excel" value="Upload Your Excel File : " />
                                  </div>
                                    <div>
                                        <input class="block  ring-4 ring-gray-100  text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="excel"  name="excel_file" type="file">
                                        <InputError class="mt-2" :message="form.errors.excelFile" />
                                    </div>
                                    <div class="flex items-center   ">
                                        <PrimaryButton class="ml-4" :key="btnName"    :class="{ 'opacity-25': processing }" :disabled="processing">
                                            {{ btnName }}
                                        </PrimaryButton>
                                  </div>
                            </div>
                    </form>
                    <div class="p-6 bg-white border mt-4 rounded-3xl shadow border-gray-100">
                        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Product name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Color
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Category
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Price
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="py-4 px-6">
                                        Sliver
                                    </td>
                                    <td class="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td class="py-4 px-6">
                                        $2999
                                    </td>
                                    <td class="py-4 px-6 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="py-4 px-6">
                                        White
                                    </td>
                                    <td class="py-4 px-6">
                                        Laptop PC
                                    </td>
                                    <td class="py-4 px-6">
                                        $1999
                                    </td>
                                    <td class="py-4 px-6 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="py-4 px-6">
                                        Black
                                    </td>
                                    <td class="py-4 px-6">
                                        Accessories
                                    </td>
                                    <td class="py-4 px-6">
                                        $99
                                    </td>
                                    <td class="py-4 px-6 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
