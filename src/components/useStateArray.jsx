import React, { useState } from 'react'
import { data } from '../data/data'

const UseStateArray = () => {

    const [people, setPeople] = useState(data)

    const handleRemove = (id) => {
        console.log('hello id', id)
        let newPeople = people.filter(person => person.id !== id)
        // from the people array filter using the id recevied and 

        setPeople(newPeople)
        //then set the setPeople with the newly formed array
    }

    const handleAddUser = () => {

    }

    const handleChange = (e) => {

    }

    return (
        <div>
            {
                people.map((person) => {
                    return (
                        <div key={person.id}>
                            <h4>{person.name}</h4>
                            <button onClick={() => handleRemove(person.id)}>Remove</button>
                        </div>
                    )
                })
            }
            <div style={{ marginTop: '100px' }} >
                <form>
                    <input type='text' placeholder='enter name' value={'test'} onChange={handleChange} />
                </form>
                <button onClick={() => setPeople([])}>Clear All Users</button>
                <button onClick={() => handleAddUser([])}>Add User</button>
            </div>
        </div>
    )
}

export default UseStateArray
