import Rect from 'react'

const PropExample = props => {
    console.log(props);
    return (
        <div>
            <p>Hello Props {props.name} a.k.a {props.heroName}</p>
            {props.children}
        </div>
        
    )

}  
export default PropExample