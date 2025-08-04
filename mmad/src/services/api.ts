import  axios from 'axios'

const client = axios.create(
    {baseURL: 'https://fakestoreapi.com/'}
)

export const getProducts = async () =>{
    const {data} = await client('/products')
    return data
}

export const getProduct = async (id: string | number) => {
    const {data} = await client(`/products/${id}`)
    return data
}