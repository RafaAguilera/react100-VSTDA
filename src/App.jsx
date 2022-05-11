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
priorityColor="lowPriority"
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
  })}

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
priorityColor="lowPriority"
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
                  <textarea className="form-control" placeholder="Comments..." id="floatingText" style={{height: "100px"}} name="body" onChange={this.getData}></textarea>
            <span></span><span></span>
                <label className="pt-3" for="prioritycheck">How much of a priority is this?</label>
                  <select className="form-select mb-2" aria-label="Default select example" id="prioritycheck" name="priority" onChange={this.getData}>
                    <option selected>Select a priority</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </select>
                <button type="button" className="btn btn-success btn-lg mt-1 mb-3" onClick={this.getAdd}>Add Todo</button>
              </form>

              </div>
            <div className="container rounded col-7 ms-3" style={{backgroundColor: "white"}}>
              <h5>VIEW ALL TODOS</h5>
              <div className="dropdown-divider pt-1 pb-1 mb-2"></div>

              <div className="container">
                       <pre>
    {this.state.Tasks.map((task,i) => (
	<div key={i}>
   
{task.edit ?  
<div>
<p className="card-text col-9 text-wrap fs-6">Edit mode </p>

<label className="pt-3" for="floatingText">Edit Mode</label>
  <textarea className="form-control" placeholder="Comments..." id="floatingText" style={{height: "100px"}} name="editbody" defaultValue={task.body} onChange={this.getData}></textarea>
  <label className="pt-3" for="prioritycheck">How much of a priority is this?</label>
  <select className="form-select mb-2" aria-label="Default select example" id="prioritycheck" name="editpriority" defaultValue={task.priority} onChange={this.getData}>
  <option selected>Select a priority</option>
  <option value="1">Low</option>
  <option value="2">Medium</option>
  <option value="3">High</option>
    </select>
<button type="button" className="btn btn-success btn-lg mt-1 mb-3" onClick={()=>this.getSave(i)}>Save</button>

</div>

:


<div className={`card-group container ${task.priorityCss}`} >
<div className='col-1'>

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="mySwitch" name="crossout" value= "1"  onClick={()=>this.getCrossed(i)}/>
</div>
 </div>
<div className='col-9'>  
{task.crossout ?
  <p className="card-text text-decoration-line-through text-wrap fs-6">{task.body}</p>
: 
  <p className="card-text text-wrap fs-6">{task.body}</p>
} 
</div> 

<div className='col-2'>
<button type="button" className="btn btn-secondary" onClick={()=>this.getEdit(i)}>Edit</button> 

<button type="button" className="btn btn-danger" onClick={()=>this.getDelete(i)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
</div>
</div>} 
</div>
	
))}
</pre>

              </div>
              </div>
              </div></div>
              </div>
    );
  }
}

export default App;
