import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductList from './actions/fetchProductList';
import ScrollButton from './component/ScrollUpComponent;'

import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';

import bckimage from './resourse/images/5.jpg';
import bckimage1 from './resourse/images/2.jpeg';
import bckimage2 from './resourse/images/3.jpeg';
import bckimage3 from './resourse/images/4.jpg';



export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: bckimage
    };
  }

  componentWillMount() {
    this.props.fetchProductList();
  }
  handleOnclick = (e) => {
    console.log(e.target.innerHTML)
  }

  handleImageChange = (index) => {
    let slidImages = [bckimage, bckimage1, bckimage2, bckimage3]
    for (let i = 0; i < slidImages.length; i++) {
      if (i === index) {
        this.setState({
          image: slidImages[i]
        })
      }
    }
  }


  render() {
    const Title = styled.h2`
        display: inline-block;
        line-height: 2.77778rem;
        cursor: pointer;
        letter-spacing: 0.0222222rem;
        flex: 0 0 auto;
        color: palevioletred;
        transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
        font-family: 'Geostar', cursive;
    `;

    const NavSeparator = styled.span`
        width: 0.277778rem;
        height: 0.277778rem;
        opacity: 0.35;
        flex: 0 0 auto;
        margin: ${props => props.isSearchBar ? '0px 3.833333rem' : '0px 1.833333rem'}
        border-radius: 50%;
        0px 0.833333rem
    `;

    const AboutUs = styled.h2`
        display: inline-block;
        line-height: 2.77778rem;
        cursor: pointer;
        letter-spacing: 0.0222222rem;
        color: currentcolor;
        flex: 0 0 auto;
        transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
        font-family: 'Lato', sans-serif;
    `;

    const ContactUs = styled.h2`
        display: inline-block;
        line-height: 2.77778rem;
        cursor: pointer;
        letter-spacing: 0.0222222rem;
        color: currentcolor;
        flex: 0 0 auto;
        transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
        font-family: 'Lato', sans-serif;
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
        padding: 0.2em;
        background: papayawhip;
    `;

    const Search = styled.span`
        display: inline-block;
        align-items: center;
        justify-content: flex-start;
        flex: 0 0 auto;
    `;
    const SearchIcon = styled.div`
        margin-right: 0.222222rem;
        cursor: pointer;
        display: flex;
        background: none;
        outline: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        flex: 0 0 auto;
    `;
    const Input = styled.input`
        display: inline-block;
        width: 25.22222rem;
        font-size: 1.833333rem;
        color: currentcolor;
        outline: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        flex: 0 0 auto;
    `;
    const Image = styled.img`
        src: url(${props => props.src});
        width: 100%;
        height: 700px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;
    const SlidContainer = styled.div`
        margin-left: 900px
    `;
    const SlidButtons = styled.span`
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 2px 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0s ease;
    `;

    const ProductContainer = styled.div`
      display: inline-block;
      margin-top: 100px;
      margin-left: 65px;
    `;

    const Product = styled.span`
      border: 1px solid #e0e0e0;
      display: inline-block;
      background: #f0f0f0;
      height: 600px;
      width: 350px;
      cursor: pointer;
      :hover {
        background: #ffffff;
      }
      OverlayButtonCOntainer:hover {
        height: 100px;
      }
    `;

    const Divider = styled.div`
      border-bottom: 5px solid #000000;
      width: 320px;
      margin-left: 15px
      margin-top: 20px
      margin-bottom: 10px
    `;

    const Brand = styled.div`
      margin-left: 15px;
      font-family: 'Roboto',sans-serif;
      font-weight: bolder;
      font-size: 20px;
    `;

    const Price = styled.div`
      margin-left: 15px;
      font-size:  ${props => props.isRetail ? '12px' : '18px'}
      margin-top: 10px;
    `;


    const Contract = styled.div`
      margin-left: 15px;
      font-size: 12px;
      margin-top: 10px;
    `;

    const Overlay = styled.div`
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #008CBA;
      width: 100%;
      height: 0;
      transition: .5s ease;
    `;



    let slidButton = [0, 1, 2, 3];
    const { products } = this.props;
    return (
      <div>
        <Wrapper >
          <Title>Cutting Edge</Title>
          <NavSeparator />
          <AboutUs onClick={(e) => { this.handleOnclick(e) }}>About Us</AboutUs>
          <NavSeparator />
          <ContactUs onClick={(e) => { this.handleOnclick(e) }}> Contact Us</ContactUs>
        </Wrapper>
        <Image src={this.state.image} />
        <SlidContainer>
          {slidButton.map((button, index) => (
            <SlidButtons onClick={() => { this.handleImageChange(button) }} />
          ))}
        </SlidContainer>
        <ProductContainer>
        <h2 style={{fontFamily:'Roboto'}}>Smartphones</h2>
          {products.map(value => (
            <Product>
              <img style={{ marginTop: '60px', marginLeft: '40px' }} src={value.imageUrl} />
              <Divider />
              <Overlay>
                <Brand>
                  {value.brand}
                </Brand>
                <Brand>
                  {value.model}
                </Brand>
                <div style={{ marginLeft: '15px' }}>starts at</div>
                <Price>{value.price}</Price>
                <Contract>{value.contract}</Contract>
                <Price isRetail={true}>Retail Price: {value.retailPrice}</Price>
              </Overlay>
            </Product>
          ))}
        </ProductContainer>

        <ScrollButton/>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  userInfo: state.fetchUserDetaiilsReducer.data,
  products: state.productListReducer.products
});


export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProductList,
    },
    dispatch,
  );

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);
