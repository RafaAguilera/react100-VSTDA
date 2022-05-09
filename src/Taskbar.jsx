import React from 'react';


export default props => (
props.edit == "true" ?  
<div>
<p className="card-text col-9 text-wrap fs-6">Edit mode </p>

<label className="pt-3" for="floatingText">Edit Mode</label>
  <textarea className="form-control" placeholder="Comments..." id="floatingText" style={{height: "100px"}} name="task" onChange={this.getData}>{props.taskBody}</textarea>
  <label className="pt-3" for="prioritycheck">How much of a priority is this?</label>
  <select className="form-select mb-2" aria-label="Default select example" id="prioritycheck" name="priority" onChange={this.getData}>
  <option selected>Select a priority</option>
  <option value="1">Low</option>
  <option value="2">Medium</option>
  <option value="3">High</option>
    </select>
<button type="button" className="btn btn-success btn-lg mt-1 mb-3" onClick={this.getEditSave}>Save</button>

</div>


:
<div className={`card-group container ${props.prioritycss}`} >
<div className='col-1'>
  <input type='checkbox' className="checkbox form-check-input mt-0"  value="" aria-label="Checkbox"/>
  </div>

  <p className="card-text col-9 text-wrap fs-6">{props.taskBody} and priority is  {props.priorityColor}  </p>

<div className='col-2'>
<button type="button" className="btn btn-secondary" onClick={this.getEdit}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button> <button type="button" className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
</div>
</div> 



);