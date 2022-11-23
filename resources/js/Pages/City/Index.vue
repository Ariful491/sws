<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Pagination from "@/Components/Pagination.vue";
import CustomModal from "@/Components/CustomModal.vue";
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue'

let  btnName = ref('Upload')
let  processing = ref(false)
let  success = ref('')
let  errorData = ref('')
let modalItem =  ref('');
let state_name = ref(route().params.state);
let county_name = ref(route().params.county);

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
            btnName.value = 'Upload Again';
            errorData.value = error.response.data.errors.excel_file[0];
        });
};
function changeModalItems(data){
    modalItem.value = data;
}
function searchQ() {
      Inertia.visit('cities',{
          data:{
                state:state_name.value,
                county:county_name.value
          }
      });
}

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
                    <div v-if="success"  class="bg-green-100 rounded flex w-1/2 mx-auto my-5  transition-all justify-between px-3 py-3 shadow-md" role="alert">
                        <div class="h-6 transition-all text-gray-700 font-bold">
                            {{success}}
                        </div>
                        <div @click="success=''">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6  text-gray-600 font-bold cursor-pointer hover:text-gray-900 transition-all h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="errorData"  class="bg-red-100 rounded flex w-1/2 mx-auto my-5  transition-all justify-between px-3 py-3 shadow-md" role="alert">
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
                    <hr>
                    <form @submit.prevent="searchQ" >
                        <div class="px-4 my-3 block flex justify-center">
                            <div class="my-auto">
                                <label class="text-gray-500 mr-5"> State Name : </label>
                            </div>
                            <div  class="mr-60">
                                <input placeholder="State Name"   v-model="state_name" class="block cursor-auto ring-4 ring-gray-100  text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text">
                             </div>

                            <div class="my-auto">
                                <label class="text-gray-500 mr-5" > County Name : </label>
                            </div>
                            <div>
                                <input placeholder="County Name"  v-model="county_name" class="block cursor-auto ring-4 ring-gray-100  text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-2 focus:ring-indigo-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="text">
                            </div>
                            <div >
                                <button type="submit" class="px-4  ring ring-indigo-500  ring-4 bg-indigo-800 py-2 text-white border-2 hover:ring-indigo-900 hover:bg-gray-700 hover:transition-all  rounded-xl ml-3"> Search</button>
                            </div>
                            <Link :href="route('cities.index')" class="px-8  ring ring-green-500  ring-4 bg-green-800 py-2 text-yellow-400 font-extrabold border-2 hover:ring-green-900 hover:bg-green-700 hover:transition-all  rounded-xl ml-3">
                                Reset
                            </Link>
                        </div>
                    </form>
<hr>
                    <div class="p-6 bg-white border mt-4 rounded-3xl shadow border-gray-100">
                        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        #
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        City
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        State Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        County Name
                                    </th>
                                    <th scope="col" class="py-3 px-6 text-center">
                                        <span > Action </span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>

                                   <tr   v-for="item in items.data" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                         {{item.id}}
                                    </th>
                                    <td class="py-4 px-6">
                                        {{ item.city }}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{item.state_name}}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{item.county_name}}
                                    </td>
                                    <td class="py-4 px-6 text-center">
                                         <button @click="modalItem=item" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--  Pagination  -->
                    <Pagination :data="items" />
                </div>
            </div>
        </div>

        <!-- Modal  -->
        <CustomModal :item="modalItem"  @modalNull = "modalItem=''"  />


    </AuthenticatedLayout>
</template>
