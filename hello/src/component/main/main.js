import React, { Component } from 'react';

class main extends Component {
    
    state = {
        click_count : 0
    }

    render() {
        return (
            <div>
            <p>현재 클릭한 횟수는 {this.state.click_count} 입니다.</p>
            <button onClick={this.click_button()}>눌러보시오 </button>
            <button onClick={() => this.setState({click_count : 0})}>눌러보시오 </button>
          </div>
        );
    }
    click_button(){
        alert('하지마');
        var result = this.state.click_count + 1;
        this.setState(
            this.state.click_count = result
        )
    }
    
}


export default main;