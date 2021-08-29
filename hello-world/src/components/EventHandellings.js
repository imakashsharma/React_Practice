import React from 'react'
export default class EventHandelling extends React.Component {
    handelEvent()
        {
            alert("This is Click Event");
        }
    render() {
        return (
            <div>
                <button onClick={()=>this.handelEvent()}>
                    Click Me
                </button>
            </div>

        )
    }
}