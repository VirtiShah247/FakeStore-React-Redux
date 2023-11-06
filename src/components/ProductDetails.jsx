import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './Header';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../action';

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state.authReducer.isAuth);
  const {id} = useParams();
  console.log("Id is ", id);
  const [ prodData, setProdData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const addProduct = (product) => {
    state ? dispatch(addCart(product)) : navigate("/login");
  }

  useEffect(()=>{
    const getProdDetail = async () => {
      setLoading(true);
      try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const responeData = await response.json();
        setProdData(responeData);
        setLoading(false);

      }
      catch (err){
        console.log("Fetch error is ", err);
        setLoading(false);
      }

    }
    getProdDetail()
  }, [id]);


  const Loading = () => {
    return <>
    ...loading
    </>
  }

  const ShowProdDetail = () => {
    return (
      <MDBCard style={{ height: "30rem", width: "70rem", margin: "5rem 0" }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={prodData.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className='fw-bold'>{prodData.title}</MDBCardTitle>
            <MDBCardText>
              {
                prodData.description
              }
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>{prodData.category}</small>
            </MDBCardText>
            <MDBCardText className='fw-bolder'>
              ${
                prodData.price
              }
            </MDBCardText>
            <MDBCardText>
              <Button className='me-2' onClick = {() => addProduct(prodData)}>Add to Cart</Button>
              <Button>Go to Cart</Button>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    )
  }

  return (
    <Fragment>
      <div className="container">
          {
            loading ? <Loading /> : <ShowProdDetail />
          }
      </div>
    </Fragment>
  )
}
