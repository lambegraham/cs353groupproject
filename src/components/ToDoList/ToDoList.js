import React from 'react';
import ToDoForm from "./ToDoForm";
import Todo from "./ToDo";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default class ToDoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true
  ***REMOVED***

    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
      ***REMOVED***));
  ***REMOVED***

    toggleComplete = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    // supposed to update
                    return {
                        ...todo,
                        complete: !todo.complete
                  ***REMOVED***
              ***REMOVED*** else {
                    return todo;
              ***REMOVED***
          ***REMOVED***)
      ***REMOVED***));
  ***REMOVED***

    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
      ***REMOVED***);
  ***REMOVED***

    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
      ***REMOVED***));
  ***REMOVED***

    removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
      ***REMOVED***));
  ***REMOVED***

    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
      ***REMOVED*** else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
      ***REMOVED*** else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
      ***REMOVED***
        return (
            <div className="d-flex flex-column">
                <ToDoForm onSubmit={this.addTodo***REMOVED*** />
                {todos.map(todo => (
                    <Todo
                        key={todo.id***REMOVED***
                        toggleComplete={() => this.toggleComplete(todo.id)***REMOVED***
                        onDelete={() => this.handleDeleteTodo(todo.id)***REMOVED***
                        todo={todo***REMOVED***
                    />
                ))***REMOVED***
                
                <ButtonGroup size="sm">
                    <Button variant='btn btn-info' onClick={() => this.updateTodoToShow("all")***REMOVED***>All</Button>
                    <Button variant='btn btn-secondary' onClick={() => this.updateTodoToShow("active")***REMOVED***>Active</Button>
                    <Button variant='btn btn-warning' onClick={() => this.updateTodoToShow("complete")***REMOVED***>Complete</Button>
                    <Button  
                        onClick={() =>
                            this.setState(state => ({
                                todos: state.todos.map(todo => ({
                                    ...todo,
                                    complete: state.toggleAllComplete
                              ***REMOVED***)),
                                toggleAllComplete: !state.toggleAllComplete
                          ***REMOVED***))
                      ***REMOVED***
                    >
                        Toggle all tasks complete: {`${this.state.toggleAllComplete***REMOVED***`***REMOVED***
                    </Button>
                    </ButtonGroup>
                <div>
                    Tasks left: {this.state.todos.filter(todo => !todo.complete).length***REMOVED***
                </div>

                {this.state.todos.some(todo => todo.complete) ? (
                    <div>
                        <button class='btn btn-success' onClick={this.removeAllTodosThatAreComplete***REMOVED***>
                            Remove all complete tasks
                        </button>
                    </div>
                ) : null***REMOVED***
            </div>
        );
  ***REMOVED***
***REMOVED***