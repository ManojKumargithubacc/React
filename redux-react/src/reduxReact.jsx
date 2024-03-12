import React from 'react'
import {connect} from 'react-redux'
import Buycake from './Action'


function ReduxReact(props) {
  return (
    <div>
    <h1>No.of.Cakes- {props.numOfCakes}</h1> 
    <button onClick={props.Buycake}>Buy cake</button>
    </div>
  )
}
function mapStateToProps(state){
  return{
    numOfCakes:state.numOfCakes
  }

}
function mapDispatchToProps(dispatch){
  return{
    Buycake:()=> dispatch(Buycake())
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxReact)
