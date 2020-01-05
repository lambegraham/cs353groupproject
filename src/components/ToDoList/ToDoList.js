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
    };

    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
    };

    toggleComplete = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    // supposed to update
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    };

    removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    };

    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div className="d-flex flex-column">
                <ToDoForm onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete={() => this.handleDeleteTodo(todo.id)}
                        todo={todo}
                    />
                ))}
                
                <ButtonGroup size="sm">
                    <Button variant='btn btn-info' onClick={() => this.updateTodoToShow("all")}>All</Button>
                    <Button variant='btn btn-secondary' onClick={() => this.updateTodoToShow("active")}>Active</Button>
                    <Button variant='btn btn-warning' onClick={() => this.updateTodoToShow("complete")}>Complete</Button>
                    <Button  
                        onClick={() =>
                            this.setState(state => ({
                                todos: state.todos.map(todo => ({
                                    ...todo,
                                    complete: state.toggleAllComplete
                                })),
                                toggleAllComplete: !state.toggleAllComplete
                            }))
                        }
                    >
                        Toggle all tasks complete: {`${this.state.toggleAllComplete}`}
                    </Button>
                    </ButtonGroup>
                <div>
                    Tasks left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>

                {this.state.todos.some(todo => todo.complete) ? (
                    <div>
                        <button class='btn btn-success' onClick={this.removeAllTodosThatAreComplete}>
                            Remove all complete tasks
                        </button>
                    </div>
                ) : null}
            </div>
        );
    }
}