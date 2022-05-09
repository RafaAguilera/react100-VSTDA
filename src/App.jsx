import React, { Component } from 'react';
import Taskbar from './Taskbar'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: '',
      priority: '',
      taskId: 0,
      toDoTasks: [],
      priorityColor: '',
      edit: true,
    }
    this.getData = this.getData.bind(this)
    this.getAdd = this.getAdd.bind(this)
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

 let singleTask = ({ taskBody: `${this.state.task}`, taskPriority: `${this.state.priority}`, prioritycss: priorityColor, edit: `${this.state.edit}`});
 console.log(singleTask)
 let array = this.state.toDoTasks.concat(singleTask)
 this.setState({
  toDoTasks: array,
  })  
  getEdit()
  { 
    this.setState({ edit: true })
    
  }
  getEditSave()
  { 
    this.setState({ edit: false })
    
  }
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
                  <textarea className="form-control" placeholder="Comments..." id="floatingText" style={{height: "100px"}} name="task" onChange={this.getData}></textarea>
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
    {this.state.toDoTasks.map(toDoTask => (
		<Taskbar
      // taskId={toDoTask.taskId}
      taskPriority={toDoTask.taskPriority}
      taskBody={toDoTask.taskBody}
      prioritycss={toDoTask.prioritycss}
      edit={toDoTask.edit}
		/>
	))
}
</pre>

              </div>
              </div>
              </div></div>
              </div>
    );
  }
}

export default App;
