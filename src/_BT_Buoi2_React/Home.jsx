import { Modal } from "bootstrap";
import React, { Component } from "react";
import data from "./data.json";
import Header from "./Header";
import Glasses from "./Glasses";
import Model from "./Model";
import GlassesDetail from "./GlassesDetail";
import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glasses: null,
    };
  }

  // Hàm xử lí chọn kính
  handleSelectGLass = (product) => {
    this.setState({ glasses: product });
  };

  render() {
    return (
      <div id="TryToGlasses">
        <Header />
        <div id="tryToglasses" className="py-5">
          <div className=" row mx-auto">
            <GlassesDetail glasses={this.state.glasses} />
            <Model />
          </div>
        </div>

        <Glasses product={data} onSelectGlass={this.handleSelectGLass} />
      </div>
    );
  }
}
