<template>
   <PayPal
  amount="10.00"
  currency="USD"
  :client="credentials">
</PayPal>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        sandbox: '<sandbox client id>',
        production: '<production client id>'
      }
    }
  }
}
</script> 