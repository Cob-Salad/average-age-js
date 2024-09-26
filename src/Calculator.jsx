import { useState } from "react";



function Calculator()  {
    const superHeroes = {
        Tony: 42,
        Peter: 18,
        Steve: 104,
        Bruce: 38,
        Thor: 1055
        };

    const [average, setAverage] = useState(0)

    const calcAverage = () => {

        let heros = Object.values(superHeroes)
        let sum = 0
        let average = 0
        for (let i = 0; i < heros.length; i++){
            sum += heros[i]
            average = sum / heros.length
            setAverage(average)
        }
    }

    return (
        <div>
            <button id="aveButton" onClick={calcAverage}>Average Age</button>
            <h3>{average} year old</h3>
        </div>
    )
}

export default Calculator