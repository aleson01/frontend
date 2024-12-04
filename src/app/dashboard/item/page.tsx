import { api } from '@/services/api'
import {getCookieServer} from '@/lib/cookieServer'
import { Orders } from './components/orders'
import { OrderProps } from '@/lib/order.type'

async function getOrders(): Promise<OrderProps[] | []>{
  try{
    const token = await getCookieServer();

    const response = await api.get("/order/openOrder", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data || []

  }catch(err){
    console.log(err);
    return [];
  }
}
export default async function Category(){
  const orders = await getOrders();

  return(
    <Orders orders ={orders}/>
  )
}