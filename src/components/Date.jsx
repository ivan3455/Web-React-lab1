import React, { Component } from 'react';

class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    // Оновлення дати
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Зупинка інтервалу при видаленні компонента
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // Оновлення стану з поточною датою
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>
                    {this.state.date.toLocaleString()}
                </h2>
            </div>
        );
    }
}

export default DateComponent;
