import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//ACTIONS
import fetchProductList from './actions/fetchProductList';
import fetchUserDetails from './actions/fetchUserDetails';



//COMPONENTS
import { PizzaShoppieComponent } from './component/PizzaShoppieComponent';
import InputTextComponent from './component/InputTextComponent';


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillMount() {
    this.props.fetchProductList();
    //this.props.fetchUserDetails();
  }

  componentDidMount() {
    console.log('Console.log', this.props.userInfo)
  }
  handleOnclick = (e) => {
    console.log(e.target.innerHTML)
  }

  handleImageChange = (index) => {
   //let slidImages = [bckimage, bckimage1, bckimage2, bckimage3]
   let slidImages = []
    for (let i = 0; i < slidImages.length; i++) {
      if (i === index) {
        this.setState({
          image: slidImages[i]
        })
      }
    }
  }

  navigateManager = (e, route) => {
    console.log('route', route);
    switch (e.target.innerHTML || route) {
      case 'About Us':
        this.props.history.push('/about')
        break
      case 'product':
        this.props.history.push('/productDetails')
        break
      default:
    }
  }

  
  render() {
    return (
      <div>
        <PizzaShoppieComponent/>
        {/* <InputTextComponent/> */}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  userInfo: state.fetchUserDetailsReducer.data,
  products: state.productListReducer.products
});


export const mapDispatchToProps = dispatch =>
  bindActionCreators(  
    {
      fetchProductList,
      fetchUserDetails,
    }, 
    dispatch,
  );

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);
