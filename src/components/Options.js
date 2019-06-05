import React from 'react';


const Options = (props)=> (
            <div>
                <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                <button 
                className="button button--link"
                onClick= {props.handleDeleteOptions} 
                >
                 Remove All
                </button>
                </div>
                {props.options.length===0 && <p className="widget__message">Please kindly add an activity to get started!</p>}
                {props.options.map((option, i) =>( 
                <Option 
                key={i}
                optionText= {option} 
                count = {i +1}
                handleDeleteOption = {props.handleDeleteOption} />))}
             </div>
        )
          


const Option = (props) => (
            <div  className="option">
                <p className="option__text">{props.count}.{props.optionText}</p>
                
                <button
                    className="button button--link"
                    onClick={(e) =>{
                     props.handleDeleteOption(props.optionText)}}
                     >
                     Delete option
                     </button>
            </div>
        )
    


export default Options