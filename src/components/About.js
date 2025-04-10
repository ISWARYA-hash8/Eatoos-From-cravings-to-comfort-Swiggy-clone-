import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent component did mount is called");
    }
    componentDidUpdate(){
       console.log("Component did update is called");
    }
    componentWillUnmount(){
        console.log("component will unmount is called");
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                        <h1>About Class Component </h1>
                       <User name={"iswarya"}/>
                       <UserClass name ={"Iswarya (class function)"}  Location ={ "Tiruppur" }/>
                      
                        <h2>This is Namaste react </h2>
                    </div>
        );
    }
}
/*
-Parent COnstructor 
-Parent render
  

      -Iswarya constructor 
      -Iswarya Render 

      -Anandhi constructor 
      -Anandhi rrender

      -iswarya ComponentDidMount
      -Anandhi COmponentDidMount

DOM UPDATED _ IN BATCH

-Parent componentdidMount

*/


// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//            <User name={"iswarya"}/>
//            <UserClass name ={"Iswarya (class function)"}  Location ={ "Tiruppur" }/>
//             <h2>This is Namaste react </h2>
//         </div>
//     )
// }
export default About;