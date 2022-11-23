import React from 'react'
import { useState, useEffect } from 'react'
import './Card.css'

export default function Card() {
    const [value, setValue] = useState(null)
    const getData = async () => {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        console.log(data)
        setValue(data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='card'>
            <h3 className='header'>ADVICE #{value ? value.slip.id : null}</h3>
            <h1 className='body-text'>"{value ? value.slip.advice : null}"</h1>
            <img id='divider' src='/images/pattern-divider-mobile.svg' alt='' />
            <div className='cta'>
                <button
                    onClick={() => {
                        getData()
                    }}
                >
                    <img id='dice' src='/images/icon-dice.svg' alt='' width={20} height={20} />
                </button>
            </div>
        </div>
    )
}
