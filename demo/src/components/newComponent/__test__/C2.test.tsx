import {render, screen, cleanup} from "@testing-library/react"
import renderer from 'react-test-renderer'
import C2 from "../C2"

it("should display hello world", () =>{
    render(<C2/>)
    const element = screen.getByTestId("1")
    expect(element).toBeInTheDocument
})

test('matchse snapshot', () => {    
    const tree = renderer.create(<C2/>).toJSON();
    expect(tree).toMatchSnapshot();
})