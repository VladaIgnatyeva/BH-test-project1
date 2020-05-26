import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown';

export default class CardItemFeatures extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card className="itemFeatures">
                <Card.Img variant="top" src={this.props.item.avatar} />
                <Card.Body>
                    <ReactMarkdown source={this.props.item.name} escapeHtml={false} />
                </Card.Body>
            </Card>
        );
    }
}