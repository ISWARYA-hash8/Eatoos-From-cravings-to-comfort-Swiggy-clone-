import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        //render method retrun some piece of jsx which will be rendered to the UI
        return (
            <div className="user">
                <h2>Name : {this.props.name}  </h2>
                <h2>Location : Tup</h2>
            </div>
        )
    }
}
export default UserClass;
     
//react.component is a classsinside react package  