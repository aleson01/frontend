import { Form } from './components/form'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'

export default async function User(){

  const token = await getCookieServer();

  const response = await api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return(
    <Form users={response.data} />
  )
}