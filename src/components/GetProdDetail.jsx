import { useDispatch } from "react-redux";
import { addProduct } from "../action";
import { Fragment, useEffect } from "react";

export const GetProdDetail = (prodId) => {
  // dispatch(setLoading("PROLOADING", true));
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductDetails = async() => {
      
    }
    fetchProductDetails()
  }, [prodId.prodId, dispatch])

  return (
    <Fragment>
      hiii
    </Fragment>
  )
}