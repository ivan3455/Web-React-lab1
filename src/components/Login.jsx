import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        // Прив'язуємо функцію handleInputChange до поточного контексту.
        this.handleInputChange = this.handleInputChange.bind(this);
        
        this.state = {
            username: '',
        };
    }

    handleInputChange = (event) => {
        this.setState(
            { username: event.target.value }
        );
    };

    handleSubmit = (event) => {
        event.preventDefault(); // Запобігаємо стандартній поведінці форми (перезавантаженню сторінки).

        // Викликаємо функцію updateUsername, яка передана через props, та передаємо їй значення username зі стану компонента.
        this.props.updateUsername(this.state.username);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Введіть ваше ім'я:
                    <input type="text" value={this.state.username} onChange={this.handleInputChange} />
                </label>
                <button type="submit">Увійти</button>
            </form>
        );
    }
}

export default Login;
