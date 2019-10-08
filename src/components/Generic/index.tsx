type RowProps<Type> = {
  input: Type | Type[]
}

export default function Rows<Type>({ input }: RowProps<Type>) {
  if (Array.isArray(input)) {
    return (
      <div>
        {input.map((i, idx) => (
          <div key={idx}>{i}</div>
        ))}
      </div>
    )
  }
  return <div>{input}</div>
}
