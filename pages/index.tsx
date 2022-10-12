import type { NextPage } from 'next'
import UserForm from '../components/UserForm'

const Home: NextPage = () => {
  return (
    <>
      <UserForm handleSubmit={(formData) => console.log(formData)} />
    </>
  )
}

export default Home
