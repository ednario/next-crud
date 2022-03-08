import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps{
  clients: Client[]
  clientSelected?: (client: Client) => void
  clientTrash?: (client: Client) => void

}

export default function Table(props: TableProps){

  const displayActions = props.clientTrash || props.clientSelected

  function renderHeader(){
    return(
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {displayActions ?<th className="p-4">Actions</th> : false}
      </tr>
    )
  }

  function renderDatas(){
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
           className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {displayActions ? renderActions(client) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client){
    return (
      <td className="flex justify-center">
        {props.clientSelected ? (
        <button onClick={() => props.clientSelected?.(client)} className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-blue-50
        `}>
          {IconEdit}
        </button>
        ) : false}
        {props.clientTrash? (
        <button onClick={() => props.clientTrash?.(client)} className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-blue-50
        `}>
          {IconTrash}
        </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
         text-gray-100
         bg-gradient-to-r from-blue-500 to-blue-800
      `}>
      {renderHeader()}
      </thead>
      <tbody>
        {renderDatas()}
      </tbody>
    </table>
  )
}