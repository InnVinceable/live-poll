import React from 'react'
import {hotkeys} from 'react-keyboard-shortcuts'
 
class ShortcutButton extends React.PureComponent {
    hot_keys = {
        'enter': { // combo from mousetrap
        priority: 1,
        handler: (event) => this.props.onClick(),
        },
    }
    
    render () {
        return (
        <button className={this.props.className} onClick={this.props.onClick}> {this.props.children}</button>
        )
    }
}
 
export default hotkeys(ShortcutButton)