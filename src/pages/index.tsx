import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  function clientSelected(client: Client){
    console.log(`Editando ${client.name}`)
  }
  function clientTrash(client: Client){
    console.log(`Apagando ${client.name}`)
  }

  function saveClient(client: Client){
    console.log(client)
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-green-500
      text-white
    `}>
      <Layout title="Simple Registration">
        {visible === 'table' ?(
      <>
        <div className="flex justify-end">
          <Button color="green" className="mb-4"
            onClick={() => setVisible('form')}>
            New Client
          </Button>
        </div>
        <Table clients={clients} 
          clientSelected={clientSelected}
          clientTrash={clientTrash}
          />
      </>

        ): (
          <Form 
          client={clients[1]}
          customerChanged={saveClient}
          calledOff={() => setVisible('table')}
          />
        )};
      </Layout>
    </div>
  )
}