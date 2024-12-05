import { api } from '@/services/api'
import {getCookieClient} from '@/lib/cookieClient'
import { useState, useEffect } from 'react'
import { Form } from './components/form'
import Order from '../order/page'


export default async function Item(){

  
  return(
    <>
      <Order />
    </>
    
  )
}