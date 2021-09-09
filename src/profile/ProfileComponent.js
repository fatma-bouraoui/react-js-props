import React from 'react'

export const ProfileComponent = ({person}) => {
    return (
        <div>

            <img src={person.image} />
            <h1>NAme :{person.name}</h1>

        </div>
    )
}
