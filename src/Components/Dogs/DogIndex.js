import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
        };
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                img: data.message,
            });
            console.log(this.state.img);
        })
    }

    render() {
        return(
            <div>
                <h1>Oh wow. So doge. Much random</h1>
                <button onClick={(e) => this.componentDidMount()}>BaRk BaRk BaRk</button>
                <img src={this.state.img} alt="No woof :("/>
            </div>
        )
    }
}
