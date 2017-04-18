import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li key={book.title}
            onClick={() => this.props.selectBook(book)}
           className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

//Anything returned from this function will end uu as a props
//on the Booklist container
function mapDispatchToProps(dispatch){
  //Whenever selecBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)

}

//Promote Booklist from a component to a container - it need to know
//about this new dispatched method, selectBook. Make is available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
