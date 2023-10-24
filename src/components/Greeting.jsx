import React from 'react';

// URL-адреси для зображень "звичайного" та "перевернутого" Шрека.
const regularShrek = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOawEsy9L5oKyszg5NJf9f5g8jEJfiF40_RboCwRKS9PzdWpd4N_kweNWgv06wWq0ytQ&usqp=CAU";
const twistedShrek = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_wzR1zqeUjzbh_bgV6Lppl_Vui16OzkkcB98IDV6mEsAe-e_Xiq2HfRy-e1dqHlL9cw&usqp=CAU";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        // Прив'язуємо функцію handleClick до поточного контексту.
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isTwisted: false,
        };
    }

    // Обробник події кліку по кнопці.
    handleClick() {
        this.setState(prevState => (
            { isTwisted: !prevState.isTwisted }
        ));
    }

    render() {
        const isTwisted = this.state.isTwisted;
        let image;
        if (isTwisted) {
            image = <TwistedShrek onClick={this.handleClick} />;
        } else {
            image = <RegularShrek onClick={this.handleClick} />;
        }

        return (
            <div>
                <h1>Привіт {this.props.name}!</h1>
                {image}
                <button onClick={this.handleClick}>
                    {this.state.isTwisted ? 'Я вивчаю React' : 'Я не вивчаю React'}
                </button>
            </div>
        );
    }
}

function RegularShrek(props) {
    return (
        <div>
            <img src={regularShrek} alt="ShrekMeme" onClick={props.onClick} />
        </div>
    );
}

function TwistedShrek(props) {
    return (
        <div>
            <img src={twistedShrek} alt="ShrekMeme" onClick={props.onClick} />
        </div>
    );
}

export default Greeting;
