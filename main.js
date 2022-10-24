const app = Vue.createApp({
  // data: function () {
  //   return {
  //     product: 'Socks'
  //   }
  // }

  //MY SOLUTION

   data() {
    return {
      product: {
        name: 'Socks',
        description: 'These are the socks available from Vue'
      }
    }
  }

  // ONLINE SOLUTION
    // data() {
    //     return {
    //         product: 'Socks',
    //         // Solution
    //         description: 'A warm fuzzy pair of socks.'
    //         // Solution
    //     }
    // }

})
