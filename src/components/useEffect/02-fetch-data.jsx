import React, { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'

const FetchEffect = () => {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(url)
            const users = await response.json()
            console.log('users', users)
            setUsers(users) // 10
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()  // perform side effect
    }, [])

    const handleDelete = () => {

    }

    return (
        <div>
            {
                users.carts?.map((item) => {
                    return (
                        <div>
                            <p>Discount: {item.discountedTotal}</p>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default FetchEffect
