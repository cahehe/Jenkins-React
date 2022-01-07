interface todos{
    id : number;
    title: string;
    completed: boolean;
}

interface Props{
    allTodos : todos    
}

export default function Todo( todo : Props){    
    const {id, title, completed} = todo.allTodos
    const h1 = <h1>{title}</h1>
    const text = completed ? <s>{h1}</s> : h1;

    return(
        <div className = "todo" data-testid = {`todo-${id}`}>
            {text}
        </div>
    )
}