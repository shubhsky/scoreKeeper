let score = 0
let wicket = 0
let ballWiseRes = []
let hit = 0
let inputRef = React.createRef();
let name = 'Shubham'

function clickOne(){
    if (wicket<10){
        score += 1
        ballWiseRes.push(1)
        rootElement.render(<App/>)
    }
}

function clickTwo(){
    if (wicket<10){
        score += 2
        ballWiseRes.push(2)
        rootElement.render(<App/>)
    }
}

function addScore(num){
    hit = num
    rootElement.render(<App/>)
}

function addWicket(){
    hit = "W"
    rootElement.render(<App/>)
}

function handleSubmit(event){
    event.preventDefault();
    if(hit == 'W'){
        if (wicket<10){
            wicket += 1;
        }
    }else{
        if (wicket<10){
            score += hit
        }
    }
    if(wicket<10){
        ballWiseRes.unshift(
            // <span>{hit}{','}{inputRef.current.value}</span>
           <span>{`${hit}, ${inputRef.current.value}`}</span>
        )
    }
    console.log(inputRef.current.value)
    hit = ''
    inputRef.current.value = ''
    rootElement.render(<App/>)
}

const ScoreButtons = () => (
    <div>
        <button onClick={()=>addScore(0)}>0</button>
        <button onClick = {()=>addScore(1)} >1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(5)}>5</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={addWicket}>Wicket</button>
    </div>
)

const Result = () => (
    <div>
        {
            ballWiseRes.map((res,index)=>(
                <>
                    {index % 6 == 0 ? <br /> : null}
                    <span key={index}>{res==0?<strong>.</strong>:res}</span>&nbsp; &nbsp;
                </>
            ))
        } 
    </div>
)

const Form = () => (
    <form onSubmit={handleSubmit}>
        <input value = {hit}/>
        <input ref={inputRef} placeholder='Add a comment' required/>
        <button>Submit</button>
    </form>
)

const App = () => (
    <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE:{score}/{wicket}</h2>
        <ScoreButtons/>
        <br/>
        <Form/>
        <hr />
        {ballWiseRes.map((res,index)=>(
            <p key = {index}>{res}</p>
        ))}
    </>
)


const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App/>)