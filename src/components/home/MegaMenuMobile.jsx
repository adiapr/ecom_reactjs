import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import {Link} from "react-router-dom";
// import MegaMenuMobile from '../home/MegaMenuMobile';

export class MegaMenuMobile extends Component {


  // membuat mega menu 

  // 2. buat konstrctor 
  constructor(){
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount(){
        this.MegaMenu();
    }



    MegaMenu(){
        var acc = document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        var i;
        for(i=0;i<accNum;i++){
            acc[i].addEventListener("click",function (){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight= panel.scrollHeight+ "px"
                }
            })
        }
    }

  render() {
    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/7570/7570840.png" />&nbsp; Men's Clothing             
          </button>
          <div className="panelMobile">
            <ul>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                  <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MegaMenuMobile