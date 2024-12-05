"use client"
import { createContext, ReactNode, useState } from 'react'
import { api } from '@/services/api'
import { getCookieClient } from '@/lib/cookieClient'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'

interface ProductProps{
    id: string;
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
    category:{
        id: string;
        name: string;
      };
}

type ProductContextData = {
  isOpen: boolean;
  onRequestOpen: (product_id: string) => Promise<void>;
  onRequestClose: () => void;
  product: ProductProps[];
  finishProduct: (product_id: string) => Promise<void>;
}

type ProductProviderProps = {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData)

export function ProductProvider({ children }: ProductProviderProps){
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<ProductProps[]>([])
  const router = useRouter();

  async function onRequestOpen(product_id: string){
    // console.log(product_id);

    const token = getCookieClient();

    const response = await api.get("/product/detail", {
      headers:{
        Authorization: `Bearer ${token}`
      },
      params:{
        product_id: product_id
      }
    })

    setProduct(response.data);
    setIsOpen(true);

  }

  function onRequestClose(){
    setIsOpen(false);
  }


  async function finishProduct(product_id: string){
    const token = getCookieClient();

    const data = {
      product_id: product_id,
    }

    try{
      await api.put("/product/finish", data, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
    }catch(err){
      console.log(err);
      toast.error("Falha ao finalizar este pedido!")
      return;
    }

    toast.success("Pedido finalizado com sucesso!")
    router.refresh();
    setIsOpen(false);

  }
  
  return(
    <ProductContext.Provider 
      value={{ 
        isOpen,
        onRequestOpen,
        onRequestClose,
        finishProduct,
        product
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}