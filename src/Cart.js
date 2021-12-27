import {Table} from 'react-bootstrap';
import {connect} from "react-redux";

function Cart({reducer, dispatch, reducer2}){
    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                {
                    reducer.map((el,idx)=>{
                        return (
                        <tr key={idx}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.quan}</td>
                        <td><button onClick={()=>{ dispatch({type : '수량증가', payload : {name : 'kim'}}) }}>+</button></td>
                        <td><button onClick={()=>{ dispatch({type : '수량감소'}) }}>-</button></td>
                    </tr>)
                    })
                }
                </tbody>
            </Table>
            {
             reducer2 == true ?
             <div>
                     <p>지금 구매하시면 신규할인 20%</p>
                     <button onClick={()=>{dispatch({type : 'click'})}}>닫기</button>
                 </div>
                :null
            }
        </>
    )
}

function 함수명({reducer, reducer2}){
    console.log(reducer2);
    return {
        reducer,
        reducer2
    }
}

export default connect(함수명)(Cart)