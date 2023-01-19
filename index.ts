
type TUsersArray = {
  userid: string,
  name: string,
  gender: string
}

type TUsersInfoArray = {
  userid: string,
  name: string,
  birthdate: string,
  age: number,
  organization: {
    name: string,
    position: string
  }
}

type TExsistData = {
  name: string,
  position: string,
  age: number,
  gender: string
}


const getUsersJobPositions = (arr: TUsersArray[]): TExsistData[] => {
  const arr2 = arr.map(item => {
    return {
      name: item.name,
      position: '',
      age: 0,
      gender: item.gender
    }
  }
  )
  return arr2
}


const usersArray: TUsersArray[] = [{
  userid: '127e4567-e89b-12d3-a458-426614174000',
  name: 'John',
  gender: 'man'
},
{
  userid: '127e4567-e89a-12f3-a458-327395154000',
  name: 'Anna',
  gender: 'woman'
}
]

const usersInfoArray: TUsersInfoArray[] = [{
  userid: '127e4567-e89b-12d3-a458-426614174000',
  name: 'John',
  birthdate: '1982-02-17T21:00:00.000Z',
  age: 40,
  organization: {
    name: 'Amazon',
    position: 'General manager'
  }
},

{
  userid: '127e4567-e89a-12f3-a458-327395154000',
  name: 'Anna',
  birthdate: '1988-02-17T21:00:00.000Z',
  age: 34,
  organization: {
    name: 'Amazon',
    position: 'Manager'
  }
}]




const usersPositions = getUsersJobPositions(usersArray)

console.log('userPositions', usersPositions)