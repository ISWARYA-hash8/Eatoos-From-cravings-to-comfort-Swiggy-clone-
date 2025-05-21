import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {  //state  is a variable which contains all the state variable inside it 
           userInfo : {
                           //this is a instance of a class this.state is used to create the instance of a class 
        name :"Dummy",
        location :"Default",
        avatar_url : "Dummy photo",
       
                        },
       // console.log("Child constructor called..");
          
    }}
  async  componentDidMount(){
        console.log("child component did mount is called.....");


        /// API calls
        const data = await fetch("https://api.github.com/users/ISWARYA-hash8");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        });


    }
    render(){
        const {name,Location,avatar_url} = this.state.userInfo;
        
       // console.log("Child render called....");
        //render method retrun some piece of jsx which will be rendered to the UI
        return (
            <div className='border rounded-sm m-4 font-bold font-serif p-4'>
                
                <img src={avatar_url} />
                <h2 className="m-4 p-4">Name : {name}  </h2>
                <h2>Location : {Location} Tiruppur</h2>
            </div>
        )
    }
} 
export default UserClass;
     
//react.component is a classsinside react package  