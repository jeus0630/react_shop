import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './comp-detail.css';
import {useEffect, useState} from "react";
import {connect} from "react-redux";

const Box = styled.div`
  padding : 20px;
`;

const Title = styled.h4`
  font-size : 25px;  
`;

function Detail({product,dispatch, reducer}){

    const navigate = useNavigate();
    const {id} = useParams();

    let [onShowJumbotron, onShowJumbotronChange] = useState(true);
    let [inputValue, inputValueChange] = useState('');

    useEffect(()=>{

        return ()=>{

        }
    },[]);

    return (
        <div className="container comp-detail">
            <Box>
                <Title>상세페이지</Title>
            </Box>

            <input type="text" onChange={(e)=>{inputValueChange(e.target.value)}}/>
            
            {
             onShowJumbotron? <div className="jumbotron">
                 SALE SALE SALE
             </div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={product[id].src} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product[id].title}</h4>
                    <p>{product[id].content}</p>
                    <p>{product[id].price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch({type : '항목추가', payload : {id : id, name : product[id].title, quan:1}});
                        navigate('/cart');
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{navigate(-1)}}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

function 함수명2({reducer}){
    console.log(reducer);
    return {
        reducer
    }
}

export default connect(함수명2)(Detail);