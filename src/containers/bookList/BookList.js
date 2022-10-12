import React from 'react'
import BookComp from '../../components/bookComp/BookComp'

export class BookList extends React.Component {
    state={
        booklist:{
            book1:"PonniyinSelvan-I",
            book2:"Harry Potter and Deathly Hollows",
            book3:"Harry Potter and the chamber of secrets",
            book4:"Harry Potter and the half Blood Prince"
        }
    }
  render() {
    return (
      <div>
          <h3> BookList Component </h3>
          <p data-testid="heading">Wel­come to My Fa­vorite Book Por­tal</p>
           <p>{this.state.booklist.book1}</p> 
           <p>{this.state.booklist.book2}</p> 
           <p>{this.state.booklist.book3}</p> 
           <p>{this.state.booklist.book4}</p> 
          <br/>
          <br/>
          <br/>
          <BookComp bookName={this.state.booklist}/>
      </div>
    )
  }
}

export default BookList