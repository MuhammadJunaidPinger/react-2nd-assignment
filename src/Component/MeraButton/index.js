import React, {Component} from 'react';
import { Fab, } from '@material-ui/core';

class MeraButton extends Component {
    
    render() {
        const {buttonText, buttonClicked, bgColor, color, btnSize} = this.props
        const style = {
            color: color ||"white",
            background: bgColor || "green",
            width: btnSize || 115,
            height: 35,
            // fontWeight: "bolder"
        }
        return (

            <div>
                <Fab style={style} onClick={buttonClicked}>
                    {buttonText} 
                    </Fab>
            </div>
            
        )
    }
}
export default MeraButton;