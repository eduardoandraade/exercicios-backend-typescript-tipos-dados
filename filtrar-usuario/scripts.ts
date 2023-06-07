const usersFilter = (
    users: { 
    name: string, 
    age: number, 
    status: boolean
}[], 
    user:string
): { 
    name: string, 
    age: number, 
    status: boolean
}[] => {
    const result = users.filter((userList) => {
        return userList.name.toLowerCase().includes(user.toLowerCase());
    });

    return result;
}

const list = [
    {
        name: "Dudu",
        age: 25,
        status: true,
    },
    {
        name: "João",
        age: 59,
        status: false,
    },
    {
        name: "Camu",
        age: 26,
        status: true,
    }
]

console.log(usersFilter(list, 'Du'));