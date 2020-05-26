import React, { Component } from 'react';
import HighlightsCardItem from './HighlightsCardItem'

export default class Highlights extends Component {


    render() {
        return (
            <div className="highlights">
                {this.props.items.map(item =>
                    <div key={item.id + 1}>
                        <HighlightsCardItem item={item}/>
                    </div>
                )}
            </div>
        );
    }
}