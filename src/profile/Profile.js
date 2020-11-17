import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => {
        return (
    <div className='container' style={{ color: 'pink', textAlign: 'center' }}>   
        <h1>
            It's me {props.FullName}
        </h1>
        <h2>
            A {props.profession}
        </h2>
        <h3>
            {props.bio}
        </h3>
        <div >
            <button className="btn" onClick={()=>{props.handleName(props.fullName)}}>Profile user</button>
        </div>
            {props.children}
        
    </div>
    );
}
Profile.defaultProps={
FullName: 'NBIBA Dhouha',
profession: 'Looking for a job',

}
Profile.propTypes = {
    FullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    alert: PropTypes.func
} 
export default Profile;
