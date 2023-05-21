import { Component } from "react";

class SkillSet extends Component{
    render(){
        return(
            <li>
                  <a href="./index.html#" title="">
                    {this.props.skill}
                  </a>
            </li>
        )
    }
}

export default SkillSet