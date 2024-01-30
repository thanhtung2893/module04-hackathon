
import Parent from './components/Parent'

import Form from './components/Form'
import Childrent  from './components/Childrent'
import Studen from './page/studen'
import Postss from './page/Postss'
export default function App() {
  const name="hao"
  const number=1
  const student={
    id:1,
    name:"mai",
    age:25
  }
  const student2=[
    {
      id:1,
      name:"hoa",
      age:20
    },
    {
      id:2,
      name:"mộc",
      age:30
    },
    {
      id:3,
      name:"lan",
      age:50
    },
  ]
  const handleChangeName = () => {
    console.log("change name")
  }
  return (
    <>
   
   <Parent 
   name={name} 
   number={number} 
   student1={student} 
   student2={student2} 
    changeName={handleChangeName}></Parent>
  <Childrent></Childrent>
   <Form></Form>
   <Studen></Studen>
   <Postss></Postss>
    </>
  )
}
