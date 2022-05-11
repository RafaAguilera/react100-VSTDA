import React, { Component } from 'react';
// import Taskbar from './Taskbar'
// import allToDo from './allToDo'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Tasks: [],
      body: '',
      priority: '',
      edit: false,
      priorityCss: '',
      editbody: '',
      editpriority: '',
      crossout: false,
    }
    this.getEdit = this.getEdit.bind(this)
    this.getData = this.getData.bind(this)
    this.getAdd = this.getAdd.bind(this)
    this.getSave = this.getSave.bind(this)
    this.getDelete = this.getDelete.bind(this)
    this.getCrossed = this.getCrossed.bind(this)

    }
getData(event)
    {
      console.log(event.target.name)
      console.log(event.target.value)
    this.setState({
      [event.target.name]: (event.target.value)
     })
  } 

  getAdd()
  { 
 
    let priorityColor;

    if (`${this.state.priority}` == 1){
priorityColor="lowPriority success"
  }else if (`${this.state.priority}` == 2){
priorityColor="medPriority"
  }else if (`${this.state.priority}` == 3){
priorityColor="highPriority"
  }

 let singleTask = ({ body: `${this.state.body}`, priority: `${this.state.priority}`, edit: this.state.edit, priorityCss: priorityColor, crossout: false});
 console.log(singleTask)
 
 let array = this.state.Tasks.concat(singleTask)
 this.setState({
  Tasks: array,
  })
this.eraseText()
}

  getEdit(index)
  { 
let editArray = [...this.state.Tasks];
editArray[index].edit = !editArray[index].edit

    console.log('get edit working')
    this.setState({ 
      Tasks: editArray
    })
    
  }

  getCrossed(index)
  { 
let crossedArray = [...this.state.Tasks];
crossedArray[index].crossout = !crossedArray[index].crossout

    console.log('get crossout working')
    this.setState({ 
      Tasks: crossedArray
    })
    }

    getSave(index)
  { 
    let priorityColor;

    if (`${this.state.editpriority}` == 1){
priorityColor="lowPriority success"
  }else if (`${this.state.editpriority}` == 2){
priorityColor="medPriority"
  }else if (`${this.state.editpriority}` == 3){
priorityColor="highPriority"
  }

    
    let saveArray = [...this.state.Tasks];
    console.log(saveArray)
saveArray[index].body = this.state.editbody
saveArray[index].priority = this.state.editpriority
saveArray[index].edit = false
saveArray[index].priorityCss = priorityColor
    console.log('get save working')
    this.setState({ 
      Tasks: saveArray
    })


  }
  
  getDelete(index){
    let deleteArray = [...this.state.Tasks];
   let deletedobject = deleteArray.splice(index,1)
console.log("this was deleted",deletedobject)
  this.setState({
   Tasks: deleteArray
   })
  
  }
eraseText() {
    document.getElementById("floatingText").value = "";
    document.getElementById("prioritycheck").value = "default";   
    this.setState({ 
      body: "",
      priority: ""
    })
}
  

    render() {
    return (
      <div className='container'>
        <header>
          <h1 className="fw-bold text-white">Very Simple To Do App</h1>
          <h4 className="fst-italic fw-light text-white">Track all the things</h4> 
          <div className="dropdown-divider pt-1 pb-1 color-white"></div>
        </header>
        <div id='body' className='container'>
          <div className="row">
            <div className="container rounded col-4" style={{backgroundColor: "white"}}>
                <h5>Add New Todo</h5>
                <form>
                <div className="dropdown-divider pt-1 pb-1"></div>
                <label className="pt-3" for="floatingText">I want to ...</label>
                  <textarea className="form-control create-todo-text" placeholder="Comments..." id="floatingText" style={{height: "100px"}} name="body" onChange={this.getData}></textarea>
            <span></span><span></span>
                <label className="pt-3" for="prioritycheck">How much of a priority is this?</label>
                  <select className="form-select mb-2 create-todo-priority" aria-label="Default select example" id="prioritycheck" name="priority" onChange={this.getData}>
                    <option selected value="default">Select a priority</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </select>
                <button type="button" className="btn btn-success btn-lg mt-1 mb-3 create-todo" onClick={this.getAdd}>Add Todo</button>
              </form>

              </div>
            <div className="container rounded col-7 ms-3" style={{backgroundColor: "white"}}>
              <h5>VIEW ALL TODOS</h5>
              <div className="dropdown-divider pt-1 pb-1 mb-2"></div>

              <div className="container">
  	<ul className="no-padding" style={{listStyle: "none"}}>
    {this.state.Tasks.map((task,i) => (

  <li key={i} className={`rounded-pill m-1 ${task.priorityCss}`}>
   
{task.edit ?  
<div>
<div className='row'>
<div className='col-2'></div>
<div className='col-8'>
<label className="pt-3" for="floatingText">Edit</label>
  <textarea className="form-control update-todo-text" placeholder="Comments..." id="floatingTextEdit" style={{height: "100px"}} name="editbody" defaultValue={task.body} onChange={this.getData}></textarea>

  <label className="pt-3" for="prioritycheck">How much of a priority is this?</label>
  <select className="form-select mb-2" aria-label="Default select example" id="prioritycheckEdit" name="editpriority" defaultValue={task.priority} onChange={this.getData}>
  <option selected>Select a priority</option>
  <option value="1">Low</option>
  <option value="2">Medium</option>
  <option value="3">High</option>
    </select>
<button type="button" className="btn btn-success btn-lg mt-1 mb-3 update-todo" onClick={()=>this.getSave(i)}>Save</button>
</div>
  <div className='col-1'></div></div>
</div>

:


<div className={`card-group container rounded-pill ${task.priorityCss}`} >
<div className='col-1'>

<div className="form-check form-switch">
  <input className="form-check-input mt-3" type="checkbox" id="mySwitch" name="crossout" value= "1"  onClick={()=>this.getCrossed(i)}/>
</div>
 </div>
<div className='col-9'>  
{task.crossout ?
  <p className="card-text text-decoration-line-through fw-light text-wrap fs-5 mt-2">{task.body}</p>
: 
  <p className="card-text text-wrap fw-light fs-5 mt-2">{task.body}</p>
} 
</div> 

<div className='col-2'>
<button type="button" className="btn btn-secondary ms-2 m-1 edit-todo" onClick={()=>this.getEdit(i)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button> 

<button type="button" className="btn btn-danger delete-todo" onClick={()=>this.getDelete(i)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
</div>
</div>} 
</li>

))}
	</ul>

              </div>
              </div>
              </div></div>
              </div>
    );
  }
}

export default App;
