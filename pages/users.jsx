import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './components/Auth'
import Account from './components/Account'

export default function Home() {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    await fetch('api/getUsers')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res)
      })
  }

  const addUsers = async () => {
    await fetch('api/addUser', {
      method: 'DELETE',
      body: JSON.stringify({ name: 'Juanito', email: 'kuan@gmail.com' }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }

  const onClickHandler = () => {}

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  useEffect(() => {
    addUsers()
  }, [])

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userCode, setUserCode] = useState('')

  return (
    <div className="h-screen flex w-full items-center justify-center ">
      <div className="flex flex-col p-8 rounded-md shadow-md ">
        <div className="flex-row py-2 ">
          <label className="p-6">Name</label>
          <input
            className="px-6"
            value={userName}
            placeholder="User name"
            onChange={(event) => {
              setUserName(event.target.value)
            }}
          />
        </div>
        <div className="flex-row ">
          <label className="px-6">Email</label>
          <input
            className="px-6"
            type="email"
            value={userEmail}
            placeholder="example@gmail.com"
            onChange={(event) => {
              setUserEmail(event.target.value)
            }}
          />
        </div>
        <div className="flex-row ">
          <label className="px-6">Code</label>
          <input
            className="px-6"
            value={userCode}
            placeholder="01245"
            type="text"
            onChange={(event) => {
              setUserCode(event.target.value)
            }}
          />
        </div>
        <input
          type="submit"
          onClick={onClickHandler}
          className=" bg-sky-500 border-indigo-300 rounded-md"
        />
      </div>
      <div>
        {users.map((usr) => (
          <div key={usr.name}> {usr.name} </div>
        ))}
      </div>
    </div>
  )
}
