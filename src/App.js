
import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import Content from"./components/Content";
import Subject from"./components/Subject";


class App extends Component {

    constructor(props){
      super(props);
      this.state={
        mode:'read',    
        Subject:{title:'WEB',sub:'World wid Web!'},
        welcome:{title:'welcome',desc:'Hello, React!!'},
        contents:[
          {id:1, title:'HTML',desc:'HTML is for infromation'},
          {id:2, title:'CSS',desc:'CSS is for design'},
          {id:3, title:'JavaScript',desc:'JavaScript is for interactive'}

        ]
      }

    }

  render(){
    console.log('App render')
  var _title,_desc=null;
    if(this.state.mode === 'welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;

  }else if (this.state.mode === 'read'){
    _title =this.state.contents[0].title;
    _desc =this.state.contents[0].desc;

  }
  return (
    <div className="App">
      {/* <Subject title="WEB" sub="world wide web!"></Subject>
      <Subject title="React" sub="For UI"></Subject> */}
      <Subject
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
   );
  }
}

export default App;
