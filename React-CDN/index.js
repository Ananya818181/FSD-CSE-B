function Book(props){
    const image=React.createElement("img",
        {
            src: props.image,
            width: "150",
            height: "150",
            alt: "Book Image"
        
        },null);
    const h4=React.createElement("h4",null,"Price:"+props.price+"/-");
    const child=React.createElement("div",{className: "card"},image,h4);
     return (child);
    }
    const books=[{image: "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._UF1000,1000_QL80_.jpg",price: "123"},
                 {image: "https://avatars.githubusercontent.com/u/32949016?s=280&v=4",price: "321"},
                 {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0wULfuQL_HlDGW0jaeXLP4RzOR5Q9Pudd81ShiOfbkzMJLigJTXNZb4&s",price: "249"}
    ]
    const booklist=books.map(p=>(
        React.createElement(Book,{image: p.image,price: p.price})
    ))
    const bookele=React.createElement("div",{className:"book-list"},booklist)
    const parent=document.getElementById("root");
    const root=ReactDOM.createRoot(parent);
    root.render(bookele);