import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://127.0.0.1:8080/app'
export const productsUrl = baseUrl + '/menu'
export const cartUrl = baseUrl + '/cart'
