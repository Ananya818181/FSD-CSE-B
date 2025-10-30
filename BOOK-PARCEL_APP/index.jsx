import ReactDOM from 'react-dom/client';
function Book(){
    return (
        <div>
            <img src="" width="400" height="400" alt="book image"></img>
            <h3>Title : Physics</h3>
            <h4>Price : ₹400</h4>
            <button>Add to Cart</button>
        </div>
    );
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>)