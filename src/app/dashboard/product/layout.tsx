import { Header } from '../components/header'
import { ProductProvider } from '@/providers/product'

export default function ProductLayout({ children }: 
  { children: React.ReactNode}
){
  return(
    <>
    <ProductProvider>
          {children}
    </ProductProvider>
    </>
  )
}