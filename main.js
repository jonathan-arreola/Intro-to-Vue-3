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
        removeCartItemById(id) {
           removeIndex = this.cart.findIndex((cartItem) => cartItem.id === id)
           this.cart.splice(removeIndex, 1)
        },
        itemPresentInCart(id) {
            this.incart = !!this.cart.find(el => el.id === id)
        }
    },
})
