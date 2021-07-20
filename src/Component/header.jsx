import React from 'react'
import classes from './header.module.css'
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends React.Component{
  state = {
  
    listItems: [
      { id:1, name:'Contact', active: false },
      { id:2, name:'Blogs', active: false },
      { id:3, name:'Why Us?', active: false },
      { id:4, name:'Our Products', active: false },
      { id:5, name:'Home', active: false }
    ],
    body:null,
  }

  componentDidMount(){
    this.showContentHandler(1);
  }

  showContentHandler = (id) =>{
    const body={...this.state.body}
   
    
    const listItems = [...this.state.listItems];
    for(let item of listItems){
       item.active = false;
    }
     
    const listIndex = this.state.listItems.findIndex(item=>{
       return item.id===id;
    });
    const listItem = {
      ...this.state.listItems[listIndex]
    }
    listItem.active = true;
    listItems[listIndex] = listItem;
    this.setState({listItems:listItems});
  }

  showSideDrawer = (elename)=>{
    let element = document.getElementById(elename);
    element.className === classes.NavList ? element.className+= classes.responsive : element.className = classes.NavList;
  }
  
  render(){
    return(
      <div>
        <div className={classes.NavList} id="NavBar">
     
           
              <img src="https://static.wixstatic.com/media/ec9816_fac99786349f4b59aeaf8550dacdbc2d~mv2.gif" className={classes.img}/>
          {this.state.listItems.map (item=>{
            return(
                     
              <a onClick={()=>this.showContentHandler(item.id)} key={item.id} href="#"className={ classNames( classes.content ,  item.active? 'active' : '' )}><b>{item.name}</b></a>)
          })}
         
          <a className={classes.icon} onClick={()=>this.showSideDrawer("NavBar")} href="#"><MenuIcon/></a>
      </div>
        <div className={classes.contentDivClass}  dangerouslySetInnerHTML={{ __html: this.state.body }}>
        </div>
      </div>
    );
  }
}

export default NavBar