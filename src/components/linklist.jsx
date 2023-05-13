import React from 'react'
import LinkedList from './linkedList'

const LinkList = (props) => {


    return (
        <div>

            {
                <ul>
                    {
                        props.products.map((item, index) => {
                            return (
                                <LinkedList item={item} />
                            )
                        })
                    }
                </ul>
            }

        </div>
    )
}

export default LinkList

// <li><h2>{item.name}</h2></li>

// <li><h2>{item.name}</h2></li>

// <li><h2>{item.name}</h2></li>

// <li><h2>{item.name}</h2></li>

// <li><h2>{item.name}</h2></li>
