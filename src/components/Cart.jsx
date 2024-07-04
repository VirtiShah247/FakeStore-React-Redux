import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, delCart, increaseQuantity } from '../action';

export const Cart = () => {
  let cartState = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className='container'>
        <h1 className='text-center my-3'>Products in Cart</h1>
        <div className="row">
          {
            cartState?.cart?.map((state) => {
              return <Fragment key={state.id}>
                <div className='col-lg-3 col-md-4 m-3 productCard'>
                  <Link to={`/products/${state.id}`} className="text-black">
                    <div rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <img src={state.image} height="280rem" width="220rem" fluid alt='...' />
                    </div>
                    <div className="text-black">
                      <div>{state.title}</div>
                      <div>
                        {state.category}
                      </div>
                      <div className="fw-bold">
                        ${state.price}
                      </div>
                    </div>
                  </Link>
                  <div className="flex text-lg">
                    <button onClick={() => dispatch(increaseQuantity(state))} className='button'>+</button>
                    <p className='p-0 m-0'>
                      {state.qty}
                    </p>
                    <button onClick={() => dispatch(decreaseQuantity(state))} disabled={state.qty === 1}  className='button'>-</button>
                  </div>
                  <div>
                    <button onClick={() => dispatch(delCart(state))} className='button py-2 px-4'>Remove from cart</button>
                  </div>
                </div>

              </Fragment>
            })
          }
        </div>
      </div>
    </Fragment>


  )
}
