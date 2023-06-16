import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort':
      if (action.payload === 'up') {
        return [...state].sort((a,b)=> a.name.localeCompare(b.name))
      }
      if (action.payload === 'down') {
        return [...state].sort((a,b)=> b.name.localeCompare(a.name))
      }
      return state
    case 'check':
      return state.filter(item => item.age >= 18)
    default:
      return state
  }
}
