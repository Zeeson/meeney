import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 12,
      width: '90%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginRight: 10,
      marginTop: 10
    }
  
    const fillerStyles = {
      height: '80%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 2,
      color: 'white',
      fontWeight: 'bold',
      display: 'none'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;