import React, {Component} from 'react';
 
//Higher-Order Component function
const withLogger =(WrappedComponent)=>{
    return class extends Component{
        componentDidMount()
        {
            console.log(`Component ${WrappedComponent.name} is mounted`);
         }
         render()
         {
          //Pass through all props to wrapped component
          return<WrappedComponent{...this.props}/>;
    }
};
};

//Original Component
class MyComponent extends Component{
    render()
    {
        return<div>My Component</div>;
    }
}

//Enhanced component with HOC
const EnhancedComponent = withLogger(MyComponent);

//Usage of the enhanced component
const HOC=()=>
{
    return(
        <div>
        <h1>Higher-Order Component Example </h1>
        <EnhancedComponent/>
        </div>
    )   
};
export default HOC;