// {
//     author(id:4) {
//       name
//       id
//       age
//     }
//   }


// {
//     book(id: "4") {
//       name
//       genre
//       id
//     }
//   }



/*  type Relations



{
  book(id: "4") {
    name
    genre
    id
  author {
    name
    id
    age
  }
  }
}



*/




/*   GraphQl List

{
  author(id: "2") {
    name
    age
    id
  books {
    name
    id 
    genre
    authorId
  }
  }
}

*/


/*
All authoe with book name

 {
    authors{
       name
      books{
        name
      
      }
     
   }
}



/*
All book with author name


 {
    books{
       name
      author{
        name
      
      }
     
   }
}

*/

/*
Create a account in Mlab for database
Install mongoose
Create Model as Book.js and Author.js
Create A constant as Mutation 

mutation{
  addAuthor(name:"Irshad Vali",age:29){
    name
    age
  }
}


mutation{
  addBook(name:"book one",genre:"story book one",authorId:"5bd7ba9649b4d0047c48ed5e"){
    name
    genre
  }
}
*/