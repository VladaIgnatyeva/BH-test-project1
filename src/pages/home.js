import React, { Component } from 'react';
import Wrapper from '../utils/wrapperAxios';
import Pagination from '../components/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewItemButton from '../components/newItemButton';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            pageOfItems: [],
            isShow: false
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
        this.updateItems();
    }


    getPages() {
        let result = this.state.pageOfItems.map(item =>
            <div key={item.id}>{item.title}</div>
        )
        return result;
    }

    show() {
        this.setState({ isShow: true });
    }

    showPagesAndPagination() {
        let pages = this.getPages();
        return <div>
            {pages}
            <Pagination items={this.state.items} onChangePage={this.onChangePage} />
        </div>
    }

    updateItems() {
        const wrapper = new Wrapper();
        wrapper.get('')
            .then(res => {
                this.setState({ items: res.data.results });
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div className='container'>
                <div className="wrapper-button">
                    <button type="button" className="my-btn btn btn-dark " onClick={this.show.bind(this)}>Get</button>
                    <NewItemButton updateItems={this.updateItems.bind(this)} />
                </div>
                {this.state.isShow &&
                    this.showPagesAndPagination()
                }
            </div>
        );
    }
}