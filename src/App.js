import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Product from './data';
import {useState} from "react";
import CompDetail from "./Detail";
import { Link, Route, Switch, Routes} from 'react-router-dom';
import axios from 'axios';

function App() {
    let [product, productChange] = useState(Product);
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/detail"}>Detail</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<CompMain product={product} productChange={productChange}></CompMain>}></Route>
            <Route path="/detail/:id" element={<CompDetail product={product}></CompDetail>}></Route>
            <Route path="/:id" element={<div>아무거나 보여주셈</div>}></Route>
        </Routes>

    </div>
  );
}

function CompMain({product, productChange}){
    return (
        <div className="container">
            <div className="row">
                {
                    product.map((el,idx)=> <CompProduct productData={product[idx]} key={idx}></CompProduct>)
                }
            </div>
            <button className="btn btn-primary" onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then(({data})=>{
                        productChange([...product, ...data]);
                })
                    .catch(()=>{});
            }}>더보기</button>
        </div>
    )
}

function CompProduct({productData}){
    return(
        <div className="col-md-4">
            <img src={productData.src} alt="" width="100%"/>
            <h4>{productData.title}</h4>
            <p>{productData.content} & {productData.price}</p>
        </div>
    )
}

export default App;
