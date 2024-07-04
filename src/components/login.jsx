import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useDispatch } from "react-redux";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../action';

export const Login = () => {
    const [userDetails, setUserDetails] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = ({ name, value }) => {
        setUserDetails((prevUserDetails) => ({ ...prevUserDetails, [name]: value }));
    }
    const handleLoginSubmit = () => {
        dispatch(handleLogin(userDetails));
        navigate("/");
    }
    return (
        <Fragment>
            <MDBContainer fluid className="p-3 my-5 h-custom">
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample" />
                    </MDBCol>
                    <MDBCol col='4' md='6'>
                        <div className="divider d-flex align-items-center my-4">
                        </div>
                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => handleChange(e.target)} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => handleChange(e.target)} />
                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleLoginSubmit}>Login</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>

    )
}