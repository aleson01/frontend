import { getCookieServer } from '@/lib/cookieServer'
import { api } from '@/services/api'
import { toast } from 'sonner'

export async function orderOpen() {
    "use server"
    const token = getCookieServer();
    try{
      await api.get("/order/orderOpen", {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
    }catch(err){
      console.log(err);
      toast.error("Falha ao finalizar este pedido!")
      return;
    }
  }