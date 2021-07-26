import React, {useState, useEffect} from 'react'

export default function useDateNow() {

    // const DATE =
    const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` )

    useEffect(() => {
        const interval = setInterval(() => {
            setDate( `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
        }, 1000)
        return () => clearInterval(interval);
    }, [date])

    return [date];
}