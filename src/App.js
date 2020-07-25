import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.updateItem=this.updateItem.bind(this);
  }
handleInput(e){
  this.setState({currentItem:{
    text:e.target.value,
    key:Date.now()
  }})
}


addItem(e){
  e.preventDefault();
  const newItem =this.state.currentItem;
 // let newItems=[""];
  console.log(newItem);
  if(newItem.text!=="")
  {
       const newItems=[...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }

}

deleteItem(key){
  const filterItems=this.state.items.filter(item => item.key!==key);
 this.setState({items:filterItems});
}

updateItem(text,key){
  const editItems = this.state.items;
  editItems.map((item) =>{
    if(item.key===key){
      item.text=text;
    }
    return null;
  })
  this.setState({items:editItems});
}
render() {
  return (
    <div className="App">
      <header className="App-header">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="type here..." value={this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button> 
        </form>
        <ListItems passItems={this.state.items} 
        deleteItem={this.deleteItem}
        updateItem={this.updateItem}
        ></ListItems>
      </header>
    </div>
  );
} 
}

export default App;
