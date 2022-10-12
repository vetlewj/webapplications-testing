type FormDataDisplayProps = {
  name: string
  email: string
  password: string
}

export default function FormDataDisplayProps({
  name,
  email,
  password,
}: FormDataDisplayProps) {
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </>
  )
}
