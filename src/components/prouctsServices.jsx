import axios from 'axios';
const api='https://dummyjson.com/products'
function getResult(){
    return axios.get(api)
}
function getResultById(id){

    return axios.get(`${api}/${id}`)

}
function printCatogries(){
return axios.get('https://dummyjson.com/products/categories');
}
function categories(cat){
    return axios.get(`${api}/category/${cat}`)
}
// 'https://dummyjson.com/products/category/smartphones'

export {getResultById,getResult,printCatogries,categories}
