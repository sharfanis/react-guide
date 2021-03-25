import React from "react";

const UserInput = (props) => {
  return <input style={styles.inputStyle} type="text" onChange={props.detectChanges} value={props.name}/>;
};

const styles = {
   inputStyle: {
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eee',
    padding: '16px',
   }

}

export default UserInput;
