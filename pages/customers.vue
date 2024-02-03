<template>
  <div class="grid place-items-center w-screen h-screen">
    <h2 class="text-2xl font-bold">Hello Admin - {{ admin?.name }}</h2>
    <p class="capitalize tracking-wide">Here's the complete list of customers under you (with their purchase amount)</p>
    <ul class="max-w-md divide-y divide-gray-400 dark:divide-gray-700">
      <li v-for="c in customers" :key="c.name" class="pb-3 sm:pb-4 odd:bg-white px-1">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {{ c.name }}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {{ c.email }}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            ${{ c.balance }}
          </div>
        </div>
      </li>
      <button @click="log_out"
        class="w-full mt-6 font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log
        Out</button>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

definePageMeta({
  middleware: ['auth']
})

// get admin info from the server and persist state by sending cookie on each re-render (REFRESH)
const { data: admin } = await useFetch('/api/customers', {
  key: `customer details under admin - ${user.value?.id}`,
  headers: useRequestHeaders(['cookie'])
})

const customers = ref(admin.value?.customers)

// sign out
const log_out = async () => {
  const { error } = await client.auth.signOut()
  if (error) console.log(error)
  else navigateTo('/login')
}

</script>

<style scoped></style>