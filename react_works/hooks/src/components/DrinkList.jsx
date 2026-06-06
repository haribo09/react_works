
const DrinkList = ({drinks}) => {

    return (
        <div>
            <h2>음료 목록</h2>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList;