import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks: [],
      tasksinput: ''
    }
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.tasks.map(task =>
              <li>{task}</li>
            )}
          </ul>
           <form>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.tasksinput} onChange={this.updateTask.bind(this)} onKeyPress={this.handlekeypress.bind(this)}/>
           </form>
        </div>
      </div>
    )
  }

  updateTask(event) {
    this.setState({
      tasksinput: event.target.value
    })
  }
  
  handlekeypress(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.concat(this.state.tasksinput),
        tasksinput: ''
      })
    }
  }

}


export default App;
