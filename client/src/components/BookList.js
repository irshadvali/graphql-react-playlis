import React, { Component } from 'react';
import {gql} from "apollo-boost"
import {graphql } from 'react-apollo';

const getBooksQuery=gql`
{
  books{
    name
    id
  }
}
`


class BookList extends Component {

  displayBooks=()=>{
    let data=this.props.data;
    if(data.loading){
      return (<div>Loading books....</div>)
    }
    else{
      return data.books.map(book=>{
        return(<li>{book.name}</li>)
      })
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <ui id="book-list">
        {this.displayBooks()}
        </ui>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
