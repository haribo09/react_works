import React, { useState } from 'react';

const Drinks2 = () => {
    const [drinks, setDrinks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addDrink = () => {
        const newDrink = inputValue;

        if(newDrink.trim() === '') {
            alert('음료 이름을 입력해주세요.');
            return;
        }

        setDrinks([...drinks, newDrink]);
    }
    return (
        <div>
            <h2>음료 관리</h2>
            <input 
                type="text" 
                placeholder="음료 이름을 입력하세요"
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={addDrink}>추가</button>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Drinks2;