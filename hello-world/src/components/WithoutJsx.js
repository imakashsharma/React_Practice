import React from 'react'

const WithoutJsx = () => {
    return React.createElement(
        'div',
        { id : '1', className: 'one'},
        // '<h1> Hello Without JSX </h1>'
        React.createElement(
            'h1', 
            {id:'2', className:'two'},
            'Hello Without JSX'
            )
        
    )
}
export default WithoutJsx