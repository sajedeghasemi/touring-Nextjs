'use client'
import React, { useEffect, useState } from 'react'

export const Countdown = () => {
    const [counter, setCounter] = useState(59)
    const timer = () => setCounter(counter - 1)

    useEffect(() => {
        () => {
            if (counter === 0) {
                setCounter(59)
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id)
        }
    }, [counter])
    



  return (
        <div>
            <div className="flex gap-5">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{"--value":15}}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{"--value":10}}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                    <span style={{"--value":24}}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        {/* <span style={{"--value":{counter}}}></span> */}
                        <span style={{"--value": `${counter}`}}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    )
}
