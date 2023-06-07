<template>
  <div>
  <h1 v-if="wallets && !wallets.length"> Hello World! </h1>
    <div v-else v-for="wallet in wallets" v-bind:key="wallet.slug">
      <h2> {{ wallet.wallet_name }} </h2>
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
    const variables = { limit: 5 };
    const response = await useAsyncQuery(allWalletsQuery, variables);
    this.wallets = response.data._rawValue.wallets.data;
    console.log(response.data._rawValue.wallets.data);
    
  }
}
</script> 