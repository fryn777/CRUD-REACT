import React,{Component} from 'react'
import ChildName from './ChildName'

export default class ParentName extends Component {
    state = {
        firstname : 'Naufal',
        lastname : 'Firdaus'
    }

    render(){
        return(
            <div>
                <ChildName
                    firstname = {this.state.firstname}
                    lastname = {this.state.lastname}
                    />
            </div>
        )
    }
}