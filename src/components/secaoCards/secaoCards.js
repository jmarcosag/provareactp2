import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../cards/card";
import "../secaoCards/secaoCards.css";

export default class SecaoProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  onFalhaCarregamento(error) {
    console.log(error);
  }

  componentDidMount() {
    fetch("http://localhost:8080/produto")
      .then((response) => response.json(), this.onFalhaCarregamento)
      .then((json) => this.setState({ productList: json }), this.onFalhaCarregamento);
  }

  render() {
    return (
      <Container>
        <h4>Produtos</h4>
        <Row xs={1} md={4} className="g-4">
          {this.state.productList.map(function (product) {
            return (
              <Col>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}