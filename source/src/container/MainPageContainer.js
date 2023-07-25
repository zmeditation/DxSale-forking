import React, { PureComponent } from 'react';
import MainPage from '../component/MainPage';

class MainPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openSideBar: true,
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    handleResize() {
        if (window.innerWidth < 1280) {
            this.setState({
                openSideBar: false
            })
        } else {
            this.setState({
                openSideBar: true
            })
        }
    }

    toggleSideBar = (e) => {
        this.setState({
            openSideBar: !this.state.openSideBar
        });
    }

    render() {
        return (<MainPage openSideBar={this.state.openSideBar} toggleHandler={this.toggleSideBar} />);
    }
}

export default MainPageContainer;