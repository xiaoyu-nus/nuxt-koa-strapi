<template>
  <div>
  <h1 v-if="wallets && !wallets.length"> Hello World! </h1>
  <div v-else>
    <h1>Wallets</h1>
    <div v-for="wallet in wallets" v-bind:key="wallet.slug">
      <h2> {{ wallet.attributes.wallet_name }} </h2>
    </div>
  </div>
  </div>
</template>

<script>
import { allWalletsQuery } from '~/graphql/queries'

export default {
  name: "Home",
  data() {
    return {
      wallets: [],
    }
  },
  apollo: {
    wallets: {
      prefetch: true,
      query: allWalletsQuery,
    }
  },
  created: async function () {
    console.log("created!!")
    const { data } = await useAsyncQuery(allWalletsQuery);
    if (data.value?.wallets) {
      // log response
      console.log("received wallets", data.value.wallets.data)
      this.wallets = data.value.wallets.data;
    }
    

  }
}
</script> 