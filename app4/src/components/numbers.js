import React, { useState,useEffect } from "react";

const Numbers = () => {
    const [numbers,setNumbers] = useState([1,2,3])
    const [letters,setLetters] = useState(['a','b','c'])

    const addNumber = () => {
        const num = [numbers[numbers.length-1]+1]
        const newnum = numbers.concat(num)
        setNumbers(newnum)
    }

    const addLetter = () => {
        const letter = [String.fromCharCode(letters[letters.length-1].charCodeAt(0) + 1)]
        const newletter = letters.concat(letter)
        setLetters(newletter)
    }

    useEffect(() => {
        console.log('Numbers state changed')
    },[numbers])

    return (
        <div>
            <h1>Numbers</h1>
            {
                numbers.map( num => {
                    return <h3>{num}</h3>
                })
            }
            <button onClick={addNumber}>Add Number</button>
            <h1>Letters</h1>
            {
                letters.map( letter => {
                    return <h3>{letter}</h3>
                })
            }
            <button onClick={addLetter}>Add Letter</button>
        </div>
    )
}
export default Numbers