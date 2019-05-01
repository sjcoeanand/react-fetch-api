import React from 'react';

class BackgroundImg extends React.Component{
    constructor(){
        super();
        this.state = {
            pictures : []
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=500")
            .then(response => {
                return response.json();
            }).then( data => {
                let pictures = data.results.map((pic) => {
                    return (
                        <div  className="img-thumb" key={pic.results}>
                            <img alt="abc"  src={pic.picture.medium} />
                        </div>
                    )
                })
                this.setState({pictures : pictures})
                console.log("state",this.state.pictures)
            })            
    }

    render(){
        return(
            <div>
                {this.state.pictures}
            </div>
        );
    }
}

export default BackgroundImg;