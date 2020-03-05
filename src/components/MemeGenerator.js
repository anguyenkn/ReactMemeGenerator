import React from "react"

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state ={
            topText: "",
            botText: "",
            randImg: "http://i.imgflip.com/1bij.jpg"
        }
    }

    render(){
        return <p>meme</p>
    }
}

export default MemeGenerator