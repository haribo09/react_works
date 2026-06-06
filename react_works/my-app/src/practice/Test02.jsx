export default function Test02() {
    const handleButton = () => {
        console.log('클릭됨2');
        
    }
    return(
        <div>
            <button onClick={() => console.log("클릭됨1")}>클릭1</button>
            <button onClick={handleButton}>클릭2</button>
        </div>
        
    )
}