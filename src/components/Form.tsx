import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client
  customerChanged?: (client: Client) => void
  calledOff?: ()=> void
}

export default function  Form(props: FormProps){
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)
  return (
    <div>
      {id? (
        <Input
          readOnly
          text="Code" 
          className="mb-5"
          value={id} />
      ) : false}
      <Input
       text="Name"
       value={name}
       valueChanged={setName}
       className="mb-5"
      />
      <Input
       text="Age"
       type="number" 
       value={age}
       valueChanged={setAge}
      />
    <div className="flex justify-end mt-7">
      <Button color="blue" className="mr-2"
      onClick={() => props.customerChanged?.(new Client(name, +age, id))}
      >
        {id ? 'Change' : 'To Save'}
      </Button>
      <Button onClick={props.calledOff}>
        Cancel
      </Button>
    </div>
    </div>
  )
}