import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import {nativeSelectClasses} from "@mui/material";

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

export const pureAddUser = (
  name: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  addUserCallback: (name: string) => void) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name.trim() === '') {
    setError("Ошибка! Введите имя!")
  } else {
    addUserCallback(name)
    setName('')
    setError('')
  }
}

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
  // если имя пустое - показать ошибку
  if (name.trim() === '') {
    setError("Ошибка! Введите имя!")
  }
}

export const pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
  if (event.key === 'Enter') {
    addUser()
  }// если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// деструктуризация пропсов
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {

  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (name: string) => {
    setName(name)
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser)
  }

  const totalUsers = 0 // need to fix
  const lastUserName = 'some name' // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
