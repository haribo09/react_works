import { useEffect, useState } from "react";

const UseEffectEx = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    /* 
        리엑트 컴포넌트가 랜더링된 이후에 어떤 일을 수행해야 할 때 사용
        useEffect(콜백함수, 의존성배열)
        [] - 처음 렌더링될 때만 한 번 실행
        [name] - name이 변경될 때마다 실행
    */
    useEffect(() => {
        console.log("렌더링");
    }, [name])

    return(
        <div>
            <h2>사용자 정보</h2>
            <input 
                type="text"
                value={name}
                placeholder="이름 입력"
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <input 
                type="number"
                value={age}
                placeholder="나이 입력"
                onChange={(event) => setAge(event.target.value)}
            />
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )
}

export default UseEffectEx