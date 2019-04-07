import React , {Component} from 'react'
import PropsType from 'props-type'
class Headline extends Component{
    constructor(Props){
        super(Props);
    }
    render(){
        const {header ,desc} =  this.props;

        if(!header){
            return null;

        }
        return(
            <div data-test = "HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        )
    }
}
Headline.propsType = {
    header:PropsType.string,
    desc:PropsType.string,
    tempp:PropsType.arrayOf(PropsType.shape({
        fisrtname:PropsType.string,
        lastname:propsType.string,
        email:PropsType.string,
        age:PropsType.number,
        onlineStatus:PropsType.bool
    }))
}
export default Headline