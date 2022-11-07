const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            incart: false,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        },
        itemPresentInCart(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.incart = true;
                }else{
                    this.incart = false;
                }
        }
    },
})
