import React from "react"

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state ={
            topText: "",
            botText: "",
            randImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        console.log("submit")
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randImg: randMemeImg
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText" 
                        value={this.state.topText}
                        placeholder="Top texts"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="botText" 
                        value={this.state.botText}
                        placeholder="Bottom texts"
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.botText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator