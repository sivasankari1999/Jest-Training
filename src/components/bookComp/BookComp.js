import React, { useState } from 'react'

const BookComp = (props) => {
    const [clicked, setClicked] = useState('false')

    const addToReadingList = (event) => {
         console.log(clicked);
        const onclick = (clicked === 'false' ? 'true' : 'false')
        console.log(onclick);
        setClicked(onclick);
    }
    // const changeHandler = (event) => {
    //     console.log(event.target.value);
    //     setMyBook([...myBook, event.target.value]);
    // }
    return (
        <div>
            <h3>Book Component</h3>
            <p  data-testid="booklist1">{props.bookName?.book1}</p>
            <p  data-testid="booklist2">{props.bookName?.book2}</p>
            <p  data-testid="booklist3">{props.bookName?.book3}</p>
            <p  data-testid="booklist4">{props.bookName?.book4}</p>
            {/* <form onSubmit={addToReadingList}>
                <input type="radio" value={props.bookName?.book1} name="book1" className="form-check-input"
                  onChange={changeHandler} />
                  <label data-testid="booklist1">  {props.bookName?.book1}</label>
                <input type="radio" value={props.bookName?.book2} name="book2" className="form-check-input"
                    onChange={changeHandler} /> 
                    <label data-testid="booklist2">  {props.bookName?.book2}</label>
                <input type="radio" value={props.bookName?.book3} name="book3" className="form-check-input"
                    onChange={changeHandler} />
                    <label data-testid="booklist3">  {props.bookName?.book3}</label>
                <input type="radio" value={props.bookName?.book4} name="book4" className="form-check-input"
                    onChange={changeHandler} />
                    <label data-testid="booklist4">  {props.bookName?.book4}</label> */}
            <br />
            <button style={{ padding: "10px 20px", margin: "20px 40px", backgroundColor: "lightblue" }}
              onClick={addToReadingList}  data-testid="Readingbtn">
                  
                  {clicked=="true"&&
                          "Added"
                  }
                  {clicked=="false"&&
                        "Add to Read­ing List"
                  }
                 </button>

            {/* <div>
                    <h3>Reading List</h3>
                    {clicked == 'true' &&
                        <div>
                            <p data-testid="heading">Book is added</p>
                            {myBook.map((book, ind) => {
                                return (
                                    <div key={ind}>
                                        <p>{book}</p>
                                    </div>
                                )
                            })}
                        </div>

                    }
                </div>
                </form>*/}


        </div>
    )
}

export default BookComp;