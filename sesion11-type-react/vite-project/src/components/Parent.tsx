import React from 'react'
type Obj = {
    id: number
    name: string
    age: number
}

type PropsParent = {
    name: string
    number: number
    student1: Obj
    student2: Obj[]
    changeName: () => void

}
export default function Parent(props: PropsParent) {
    console.log("1111111111", props);
    const { name, student2 } = props


    return (
        <>
            <div>Parent</div>
            <p>tên: {name}</p>
            {student2.map((item) => {            
                    <ul key={item.id}>
                       <li>id: {item.id}</li> 
                        <li>name: {item.name}</li>
                        <li>age: {item.age}</li>
                    </ul>                                  
            })}
            <button >change name</button>
            <button onClick={()=>{"minh"}}>change name parent</button>
        </>
    )
}
