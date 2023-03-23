import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])

  const onChange = (event) => {
    setToDo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()

    if (toDo === "") {
      return
    }

    // toDos.push() // javascript: 직접적으로 추가할 수 없음
    // 수정하는 함수
    setToDos((currentArray) => [...currentArray, toDo])

    setToDo("")
    // input 비워주기
  }
  const onDelete = (index) => {
    // const li = index.target.parentElement
    // li.remove()

    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex))
  }

  const styleW = {
    width: "100px"
  }

  console.log(toDos)

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} onChange={onChange}
          placeholder="Write your to do" />
        <button>Add To Do</button>
      </form>

      {
        toDos.map((item, index) => (
          <p key={index}>
            <span style={{ width: "100px" }}>{item}</span>
            <button onClick={() => onDelete(index)}>X</button>
            {/* ()=> : "바로 실행"되지 않고 클릭을 기다리는 함수로 쓰기 위함 */}
          </p>
        ))
      }

    </div>
  );
}

export default App;
