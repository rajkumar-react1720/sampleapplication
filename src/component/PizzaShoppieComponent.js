import React, { useState } from 'react';

//STYLES
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

//COMPONENTS
import NavbarComponent from './NavbarComponent';
import BannerComponent from './BannerComponent';
import MenuComponent from './MenuComponet';
import { FoodDialog } from './FoodDialog';
import { Order } from './Order';
import { useOpenFood } from '../component/hooks/useOpenFood';
import { useOrders } from './hooks/userOrders';
import { useTitle } from './hooks/useTitle';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }

  h1,h2,h3 {
    font-family: 'Righteous', cursive;
  }
`

export function PizzaShoppieComponent() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders})

    return (
        <>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders}/>
            <NavbarComponent />
            <Order {...orders}/>
            <BannerComponent />
            <MenuComponent {...openFood}/>
        </>
    )
}