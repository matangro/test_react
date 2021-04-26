import React, { Component } from 'react';

export class Card extends Component {

    constructor(props) {
        super(props);
        this.state = { letter:props.letter, found:false, show:false };
    }
    clickCard = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.clickCard}>{this.state.letter}{this.state.show ? this.state.letter : null}</button>
        );
    }
}
