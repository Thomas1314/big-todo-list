import React from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addTask = () => {
        const { input } = this.state;
        if (input) {
          this.props.addTask(input);
          this.setState({ input: '' });
        }
    };

    handleEnter = event => {
        if(event.key === 'Enter') this.addTask();
    };

    inputChange = event => {
        this.setState({ input: event.target.value });
    };

    render() {
        const { input } = this.state;

        return (
            <div style={{ display: "flex" }}>
                <Input
                onKeyPress={this.handleEnter}
                onChange={this.inputChange}
                value={input}
                placeholder='Todo'
                style={{ width: "90%" }}
                />

                <Button 
                onClick={this.addTask}
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "10%" }}
                >
                    Add
                </Button>
            </div>
        );
    }
}
export default TaskInput;