import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client
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
      <Button color="blue" className="mr-2">
        {id ? 'Change' : 'To Save'}
      </Button>
      <Button color="blue">Cancel</Button>
    </div>
    </div>
  )
}