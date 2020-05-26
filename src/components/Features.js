import React, { Component } from 'react';
import FeaturesCardItem from './FeaturesCardItem'

export default class Features extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className=''>
                <div className="row ">
                    {this.props.items.map(item =>
                        <div className="col-xs-12 col-lg-6 col-xl-4" key={item.id + new Date().getMilliseconds()}>
                            <FeaturesCardItem item={item} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}