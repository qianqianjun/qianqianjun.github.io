import React from 'react'

class Pick extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            luckdog:this.props.luckdog,
            canstart:true,
            timer:null
        }
    }
    componentDidMount() {
        document.querySelector(".back").style = `height:${window.innerHeight}px`;
    }
    render() {
        const {player}=this.props;
        return (
            <div className="back">
                <div className="main">
                    <h2 className="title">掌声有请发言者</h2>
                    <div className="result">{this.state.luckdog}</div>
                    <br></br>
                    <button
                        className="button begin" style={{"verticalAlign": "middle"}}
                        onClick={
                            ()=>{
                                if(this.state.canstart){
                                    this.setState({
                                        canstart:false
                                    });
                                    this.setState({
                                        timer:setInterval(()=>{
                                            const num=Math.floor((Math.random()*100) % player.length);
                                            this.setState({
                                                luckdog:player[num]
                                            })
                                        },20)
                                    });
                                }else{
                                    alert("当前进程已经开始，请按选定键结束！");
                                }
                            }
                        }>
                        <span>开始</span>
                    </button>

                    <button className="button end" style={{"verticalAlign": "middle"}}
                            onClick={
                                ()=>{
                                    clearInterval(this.state.timer);
                                    this.setState({
                                        canstart:true
                                    });
                                    this.props.stop(this.state.luckdog);
                                }
                            }
                    >
                        <span>选定</span>
                    </button>
                </div>
                {/*<div className="footer">选择数据源</div>*/}
            </div>
        );
    }
}

export default Pick