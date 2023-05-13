import React from 'react'

const LinkedList = (props) => {
    console.log('props', props)
    return (

        <li key={props.item.id}><h2>{props.item.name}</h2></li>

    )
}

export default LinkedList
