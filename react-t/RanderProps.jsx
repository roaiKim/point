import React from 'react'

class MouseDiv extends React.PureComponent {
    constructor(props){
        super(props)

        this.state = {
            mouseX: 21,
            mouseY: 21,
            ballWidth: 40,
            ballHeight: 40
        }

        this.mouseMove = this.mouseMove.bind(this)
        this.parentRef = React.createRef()
    }

    componentDidMount() {
        const {x, y, width, height} = this.parentRef.current.getBoundingClientRect()
        const {ballWidth, ballHeight} = this.state
        this.xMax = x + width - (ballWidth / 2) - 1; // 鼠标x轴的最大值 再减去1是因为小球有边框
        this.yMax = y + height - (ballHeight / 2) - 1; // 鼠标y轴的最大值
        this.mX = x; // 鼠标x轴
        this.mY = y; // 鼠标y轴
    }

    mouseMove (event) {
        const {clientX, clientY} = event
        const {ballWidth, ballHeight} = this.state
        // 不允许超过最大值 防止过界
        const xMax = clientX > this.xMax ? this.xMax : clientX
        const yMax = clientY > this.yMax ? this.yMax : clientY
        const x = xMax - this.mX // 小球相对于父容器的坐标
        const y = yMax - this.mY
        const mouseX = x < (ballWidth / 2) ? (ballWidth / 2) : x
        const mouseY = y < (ballHeight / 2) ? (ballHeight / 2) : y
        this.setState({mouseX, mouseY});
    }

    render () {
        const {mouseX, mouseY, ballHeight, ballWidth} = this.state
        return <div ref={this.parentRef} onMouseMove={this.mouseMove} style={{height: "400px", width: "400px", background: "pink", cursor: "pointer", position: "relative"}}>
            {this.props.render({x: mouseX, y: mouseY, height: ballHeight, width: ballWidth})}
        </div>
    }
}

class CatDiv extends React.PureComponent {
    render () {
        const {x, y, width, height} = this.props.info
        return <div style={{height, width, border: "1px solid red", borderRadius: "50%", position: "absolute", left: x - 20, top: y - 20}}>
        </div>
    }
}

class RenderProps extends React.PureComponent {
    render() {
        return <div>
            <MouseDiv render={(state) => <CatDiv info={state} />}/>
        </div>
    }
}

export default RenderProps;
