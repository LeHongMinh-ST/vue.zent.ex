import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // Bai7.1
        defaulImg: "https://www.tibs.org.tw/images/default.jpg",
        products1: [
            {
                id: 1,
                name: 'iPhone 12 Pro Max Chính Hãng',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
                price: 32990000,
                quantity: 566,
                isAvailable: true,
            },
            {
                id: 2,
                name: 'iPhone 12 Chính Hãng (VN/A)',
                image: '',
                price: 21790000,
                quantity: 123,
                isAvailable: true,
            },
            {
                id: 3,
                name: 'iPhone 11 Chính hãng',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
                price: 16690000,
                quantity: 0,
                isAvailable: false,
            },
            {
                id: 4,
                name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
                price: 12190000,
                quantity: 1023,
                isAvailable: true,
            },
            {
                id: 5,
                name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                image: '',
                price: 26500000,
                quantity: 6,
                isAvailable: true,
            }
        ],
        carts: [],
        isNotData: false,

        // Bai7.2
        product: {
            id: "",
            name: "",
            price: "",
            quantity: "",
            status: false
        },
        btnCreate: "Tạo mới",
        pagination: {
            limit: 5,
            page: 1,
        },
        products: [],
        name:"",
        price:"",
        quantity:"",
        errorName: "",
        errorPrice: "",
        errorQty: "",
    },
    getters: {

        //Bai7.1
        total: state => {
            let total = 0;

            state.carts.forEach((cart) => {
                total = total + +cart.quantity * cart.price;
            });

            return total;
        },

        //Bai7.2
        list: state => {
            let limit = state.pagination.limit;
            let page = state.pagination.page;
            let totalPage = Math.ceil(state.products.length / limit);
            let start = limit * (page - 1);
            let end = page == totalPage ? state.products.length : start + limit;
            return state.products.slice(start, end);
        },
        textPagonation: state =>  {
            let limit = state.pagination.limit;
            let page = state.pagination.page;
            let totalPage = Math.ceil(state.products.length / limit);
            let start = state.products.length > 0 ? limit * (page - 1) + 1 : 0;
            let end = page == totalPage || totalPage == 0 ? state.products.length : start + limit - 1;
            return 'Hiển thị ' + start + '-' + end + ' trên tổng ' + state.products.length + ' (' + totalPage + ' trang)';
        }

    },
    mutations: {
        // Bai7.1
        addProduct(state, id) {
            let newProduct = [];
            let isCart = false;
            state.products1.forEach((product) => {
                if (product.id == id) {
                    newProduct = Object.assign({}, product);
                }
            });

            if (newProduct.quantity > 0) {
                state.carts.map((cart) => {
                    if (newProduct.id == cart.id) {
                        if (newProduct.quantity > cart.quantity) {
                            cart.quantity++;
                        } else {
                            alert('Sản phẩm hết hàng')
                        }
                        isCart = true;
                    }
                })

                if (!isCart) {
                    newProduct.quantity = 1;
                    state.carts.push(newProduct);
                }
            } else {
                alert('Sản phẩm hết hàng');
            }
        },
        deleteProduct(state, id) {
            state.carts = state.carts.filter((cart) => {
                return cart.id != id;
            });
        },
        onChange(state, data) {
            let id = data.id;
            let value = data.value;
            let item = state.products1.find((item) => {
                return item.id == id;
            })
            console.log(value)
            if (item.quantity >= value) {
                if (value == 0) {
                    state.carts = this.carts.filter((cart) => {
                        return cart.id != id;
                    });
                }

                state.carts.forEach((cart) => {
                    if (cart.id == id) {
                        cart.quantity = value;
                    }
                })
            } else {
                alert('Sản phẩm hết hàng')
            }

        },

        //Bai 7.2
        submitEvent(state,data) {
            if (data.id.length == 0) {
                state.product.id = 'SP' + new Date().getTime();
                state.product.name = data.name;
                state.product.price = data.price;
                state.product.quantity = data.quantity;
                state.product.status = data.quantity > 0 ? true : false;
                state.products.push(Object.assign({}, state.product));

            } else {
                state.products.map((product) => {
                    if (product.id == data.id) {
                        product.name = data.name;
                        product.price = data.price;
                        product.quantity = data.quantity;
                        product.status = data.quantity > 0;
                    }
                })
            }
            state.product.id = "";
            state.product.name = "";
            state.product.price = "";
            state.product.quantity = "";
            state.product.status = false;
        },
        changePage(state,value) {
            let limit = state.pagination.limit;
            let page = state.pagination.page;
            let totalPage = Math.ceil(state.products.length / limit);

            if (page + value <= totalPage && page + value > 0) {
                state.pagination.page += Number(value);
            }
        },
        editProcess(state,data) {
            state.btnCreate = "Cập nhập";

            let a = state.products.find((product) => {
                return product.id == data;
            });

            state.product = Object.assign({},a);
        },

        deleteProcess(state,data) {
            state.products = state.products.filter((product) => {
                return product.id != data;
            })
        },
        changeName(state,e) {
            state.product.name =  e;
            if (!state.product.name.length == 0) {
                state.errorName = "";
            }else {
                state.errorName = "Tên sản phẩm không được để trống";
            }
        },
        changePrice(state,e) {
            state.product.price = e;
            if (!state.product.price.length == 0) {
                state.errorPrice = "";
            }else {
                state.errorPrice = "Tên sản phẩm không được để trống";
            }
        },
        changeQuantity(state,e) {
            state.product.quantity = e;
            if (!state.product.quantity.length == 0) {
                state.errorQty = "";
            }else {
                state.errorQty = "Tên sản phẩm không được để trống";
            }
        },
        setErrorName(state,value){
            state.errorName = value
        },
        setErrorPrice(state,value){
            state.errorPrice = value
        },
        setErrorQty(state,value){
            state.errorQty = value
        },
        btnClear(state) {

            state.errorQty = "";
            state.errorName = "";
            state.errorPrice = "";
            state.btnCreate = "Tạo mới";
            state.product.id = "";
            state.product.name = "";
            state.product.price = "";
            state.product.quantity = "";
            state.product.status = false;
        }
    }
})

export default store