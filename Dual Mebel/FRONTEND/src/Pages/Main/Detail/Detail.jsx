import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  return (
    <>
    <Helmet>
      <title>DETAIL</title>
    </Helmet>
    <div className="card">
      <img src={detail.image} style={{ width: "300px" }} />
      <h1>{detail.title}</h1>
      <p>{detail.description}</p>
      <h2>{detail.price}$</h2>
    </div>
  </>
  )
}

export default Detail