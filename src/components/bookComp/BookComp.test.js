
import { render, screen, fireEvent } from "@testing-library/react";
import BookComp from "./BookComp";
//mock data but i used the same data
const booklist = {
    book1: "PonniyinSelvan-I",
    book2: "Harry Potter and Deathly Hollows",
    book3: "Harry Potter and the chamber of secrets",
    book4: "Harry Potter and the half Blood Prince"
}
describe("Book Component", () => {
    it('check add to Reading list button is working properly', () => {
        render(<BookComp />);
        const readingBtnEl = screen.getByTestId('Readingbtn');
        fireEvent.click(readingBtnEl);
        expect(readingBtnEl.textContent).toBe('Added');

        fireEvent.click(readingBtnEl);
        expect(readingBtnEl.textContent).toBe('Add to Read­ing List');
    })
    it('Book Comp chould get props from Booklist comp', () => {
        render(<BookComp bookName={booklist} />);
        const labelEl = screen.getByTestId('booklist1');
        expect(labelEl).toHaveTextContent('PonniyinSelvan-I');
    })
})

