import { useEffect, useState } from 'react'
import FormDataDisplay from './FormDataDisplay'

type FormData = {
  name: string
  email: string
  password: string
}

const isValid = ({ name, email, password }: FormData) => {
  if (name && email && password) {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

type FormProps = {
  handleSubmit: ({ name, email, password }: FormData) => void
}

export default function UserForm({ handleSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState('')
  useEffect(() => {
    if (!isValid(formData)) {
      setFormErrors('Invalid name, email or password')
    } else {
      setFormErrors('')
    }
  }, [formData])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValid(formData) && !formSubmitted) {
      setFormSubmitted(true)
      handleSubmit(formData)
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id
    if (id && id in formData) {
      setFormData({ ...formData, [id]: e.target.value })
    }
  }
  if (!formSubmitted) {
    return (
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleFormChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <button disabled={!isValid(formData)}>Submit</button>
      </form>
    )
  } else {
    return (
      <>
        <FormDataDisplay
          name={formData.name}
          email={formData.email}
          password={formData.password}
        />
      </>
    )
  }
}
