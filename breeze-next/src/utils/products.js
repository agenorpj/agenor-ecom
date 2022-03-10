import axios from '@/lib/axios'

module.exports = {
    getProducts: () => {
        return axios.get('api/products')
    },
}
