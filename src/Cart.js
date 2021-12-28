import {Table} from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useEffect, memo} from "react";

export default function Cart(){

    let {reducer,reducer2} = useSelector(state => state);
    let dispatch = useDispatch();

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
                        <td><button onClick={()=>{ dispatch({type : '수량증가', payload : {idx : idx}}) }}>+</button></td>
                        <td><button onClick={()=>{ dispatch({type : '수량감소', payload : {idx : idx}}) }}>-</button></td>
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
            <Parent 이름="존박" 나이="20"></Parent>
        </>
    )
}

// function 함수명({reducer, reducer2}){
//     console.log(reducer2);
//     return {
//         reducer,
//         reducer2
//     }
// }

// export default connect(함수명)(Cart)

function Parent({이름, 나이}){
    return (
        <div>
            <Child1 이름={이름}></Child1>
            <Child2 나이={나이}></Child2>
        </div>
    )
}
function Child1(){
    useEffect( ()=>{ console.log('렌더링됨1') } );
    return <div>1111</div>
}
const Child2 = memo(()=>{
    useEffect( ()=>{ console.log('렌더링됨2') } );
    return <div>2222</div>
});