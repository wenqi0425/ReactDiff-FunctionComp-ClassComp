import React, { Component } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

class ClassComponent extends Component {

    // Step 1: 初始化状态
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    // Step 2: 创建更新 count 的方法
    setCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
          <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p>Class Component</p>
            <div className="card">
                {/* Step 3: 使用状态中的 count 并在按钮点击时调用更新方法 */}
                <button onClick={this.setCount}>
                    count is {this.state.count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
          </>
      );
    }
}

export default ClassComponent;