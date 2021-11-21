import { Component } from "react";
import Carrossel from "../../components/carousel/carousel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/navbar/Navbar";
import ProductDisplay from "../../components/secaoCards/secaoCards";

export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <Carrossel />
        <ProductDisplay />
        <Footer />
      </article>
    );
  }
}