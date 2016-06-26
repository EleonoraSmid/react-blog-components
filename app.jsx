import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './header/header-component'
import {PageHeader} from './header/page-header-component'
import {MainContent} from './main-content/main-content-component'
import {Footer} from './footer/footer-component';

class MainBlogApp extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainBlogApp';
    }
    render() {
        return (
         <div>
         <Header />
         <PageHeader />
         <MainContent />
         <Footer />
         </div>
         );
    }
}

ReactDOM.render(<MainBlogApp />, document.getElementById('mainContainer'))
