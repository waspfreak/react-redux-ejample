 export function selectBook(book){
    //console.log('A books has been selected:', book.title);
    //selectBook is ans ActionCreator, it needs to return asn action,
    //and object with a type property.
    return{
      type: 'BOOK_SELECTED',
      payload: book
    }
}

export function selectPost(post){

   return{
     type: 'POST_SELECTED',
     payload: post
   }
}
