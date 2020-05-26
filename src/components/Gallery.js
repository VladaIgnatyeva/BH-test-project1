import React, { Component } from 'react';
import { Image } from 'react-bootstrap'

export default class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='row'>
                {this.props.items.map(item =>
                    <div className="photo-gallery col-xs-12 col-lg-6 col-xl-4" key={item.id + new Date().getMilliseconds()}>
                        {item.avatar ?
                            <Image src={item.avatar} /> : <p className="not-photo">Photo not found</p>
                        }
                    </div>
                )}
            </div>
        );
    }
}