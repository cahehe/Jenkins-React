import {render, screen, cleanup} from "@testing-library/react"
import renderer from 'react-test-renderer'
import Todo from "../todo"

afterEach(() => {
    cleanup()
})

test('should render non-completed todo component', () => {
    const todo = {id : 1, title : "wash dishes", completed: false}
    const {getByText} = render(<Todo allTodos= {todo} />);    

    // const todoElement = screen.getByTestId('todo-1');

    const todoElement = getByText("wash dishes")
    console.log(todoElement)

    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent("wash dishes")
    expect(todoElement).not.toContainHTML('<s>');
})


test('should render non-completed todo component', () => {
    const todo = {id : 2, title : "wash dishes", completed: true}
    render(<Todo allTodos= {todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash dishes");
    // below does not works since <s> is not a regular html element
    //expect(todoElement).toContainHTML('<s>');
})

test('matchse snapshot', () => {
    const todo = {id : 1, title : "wash dishes", completed: false}
    const tree = renderer.create(<Todo allTodos= {todo} />).toJSON();
    expect(tree).toMatchSnapshot();
})