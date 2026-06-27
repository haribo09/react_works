
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AxiosTodos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setData(res.data); //가져온 데이터를 상태에 저장
                console.log(res.data);
                
            })
            .catch((err) => {
                console.log(err); //오류 처리
                
            })
    }, [])

    return(
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/axios/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosTodos;