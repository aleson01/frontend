export default function Users({users}){

    async function handleRegisterOrder(formData: FormData){
      "use server"
      
      const numero = formData.get("number")
  
      if(numero === "") return;
  
      const data = {
        table: Number(numero),
      }
      const token =  await getCookieServer();
  
      await api.post("/order", data, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err) => {
        console.log(err);
        return;
      })
      toast.success("Logout feito com Sucesso")
      redirect("/dashboard")
  
    }
  
    return(
      <main className={styles.container}>
        <h1>Abrir Mesa</h1>
  
        <form 
          className={styles.form}
          action={handleRegisterOrder}
        >
          <input 
            type="number"
            name="number"
            placeholder="Número da Mesa"
            required
            className={styles.input}
          />
  
          <Button name="Abrir" />
        </form>
      </main>
    )
  }