interface InputProps {
  type?: 'text' | 'number'
  text: string
  value: any
  readOnly?: boolean
  className?: string
  valueChanged?: (value: any) => void
}

export default function  Form(props: InputProps){
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">
        {props.text}
      </label>
      <input 
          type={props.type ?? 'text'}
          value={props.value}
          readOnly={props.readOnly}
          onChange={e => props.valueChanged ?. (e.target.value)}
          className={`
              border border-blue-500 rounded-lg
              focus:outline-none bg-gray-200 px-4 py-2
              ${props.readOnly ? '': 'focus:bg-white'}
          `}
      />
    </div>
  )
}