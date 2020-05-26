import React, { Component } from 'react';
import Wrapper from '../utils/wrapperAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from '../components/Features'
import Highlights from '../components/Highlights'
import Gallery from '../components/Gallery'


export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsFeatures: [],
            itemsGallery: [],
            itemsHighlights: [],
        };
    }

    componentDidMount() {
        this.getDataPage();
    }


    getDataPage() {

        const wrapper = new Wrapper();
        wrapper.get('')
            .then(res => {
                console.log('response', res.data.results[0])
                this.setState({ 
                    itemsFeatures: res.data.results[0].len_features, 
                    itemsGallery: res.data.results[0].len_gallery,
                    itemsHighlights: res.data.results[0].len_highlights,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='container'>
                <Features items={this.state.itemsFeatures}/>
                <Highlights items={this.state.itemsHighlights}/>
                <Gallery items={this.state.itemsGallery}/>
            </div>
        );
    }
}