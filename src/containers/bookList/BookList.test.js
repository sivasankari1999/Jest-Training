
import { render,screen } from "@testing-library/react";
import BookList from "./BookList";
import renderer from 'react-test-renderer';
describe("bookList Component",()=>{
    it("should have the text ",()=>{
        render(<BookList/>);
        const headingEl = screen.getByTestId('heading');
        expect(headingEl).toHaveTextContent('Wel­come to My Fa­vorite Book Por­tal');
    })
    it('should have right booklist snapshot',()=>{
        const snapshotJSON = renderer.create(<BookList />).toJSON();
        expect(snapshotJSON).toMatchSnapshot();
    })
})

