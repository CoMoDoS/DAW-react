import React from 'react'
import './css/test.css'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: null,
            hoverStar: 0,
            selectedStar: 0,
        };
    }

    renderStar(item, index) {
        let hoverClass = index <= this.state.hoverStar ? 'hover' : '';
        let selectedClass = index <= this.state.selectedStar ? 'selected' : '';
        return(
        <div className="star-wrapper" onClick={() => this.setState({ selectedStar: index })}>
            <svg onMouseEnter={() => this.setState({ hoverStar: index, label: item })} className={`rating-star ${hoverClass} ${selectedClass}`} onMouseLeave={() => this.setState({ hoverStar: null, label: null })} viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
            </svg>
            <div className="label-wrapper">
                <div className={`star-label ${this.state.label != null && index === this.state.hoverStar && 'visible'}`}>{this.state.label}</div>
            </div>
        </div>
        )
    }

    renderStars() {
        return ['Terrible!','Bad...','Good.','Great...','Excelent!'].map( (item, index) => {
                return this.renderStar(item, index + 1);
            }
        );
    }


    render() {
        return (
            <div className="main-wrapper">
                {this.renderStars()}

            </div>
        );
    }
}
export  default Test;
//Render App

