import Client from "../core/Client";

interface TableProps{
  clients: Client[]
}

export default function Table(props: TableProps){

  function renderHeader(){
    return(
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
      </tr>
    )
  }

  function renderDatas(){
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
           className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
         text-gray-100
         bg-gradient-to-r from-purple-500 to-purple-800
      `}>
      {renderHeader()}
      </thead>
      <tbody>
        {renderDatas()}
      </tbody>
    </table>
  )
}