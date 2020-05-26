import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown';

export default class HighlightsCardItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-6 col-lg-6  col-xl-6">
                    <ReactMarkdown source={this.props.item.name} escapeHtml={false} />
                </div>
                <div className="col-xs-6 col-lg-6 col-xl-6">
                    {this.props.item.avatar ?
                        <Image src={this.props.item.avatar} rounded /> : <p className="not-photo">Photo not found</p>
                    }
                </div>
            </div>
        );
    }
}