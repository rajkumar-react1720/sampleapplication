var express = require('express');
const path = require('path');
var app = express();
var iPhoneXr_Red = require('./src/resourse/images/1')


const response = [
    {
        sku: '423424243432',
        imageUrl: `${iPhoneXr_Red}`,
        brand: 'Apple',
        price: '$41.66/mo',
        model: 'iPhone® XR',
        contract: 'For 24 months, 0% APR',
        retailPrice: '$999.99'

    },
    {
        sku: '736927374749',
        //imageUrl:lg_v50_black,
        brand: 'LG',
        price: '$35.66/mo',
        model: 'V50 ThinQ™ 5G',
        promotions: 'Buy one, get a Galaxy S10e on us. Or, get $750 off another w/Unlimited & new line',
        contract: 'For 24 months, 0% APR',
        retailPrice: '$700.99'
    },


    {
        sku: '987348348278',
        //imageUrl: lg_black_alpha,
        brand: 'LG',
        price: '$41.66/mo',
        model: 'Alpha',
        contract: 'For 24 months, 0% APR',
        retailPrice: '$600.99'
    },
    {
        sku: '987430924774',
        //imageUrl: Motorola_Moto_G,
        brand: 'Motorola',
        price: '$41.66/mo',
        model: 'Moto-G7',
        contract: 'For 24 months, 0% APR',
        retailPrice: '$800.99'
    },
    {
        sku: '656548733987',
        //imageUrl: red_hydrogen_black,
        brand: 'RED',
        price: '$41.66/mo',
        model: 'Hydrogen One',
        contract: 'For 24 months, 0% APR',
        retailPrice: ''
    },
    {
        sku: '316464864846',
        //imageUrl: SamsungGalaxy_S10PLUS_Blue,
        brand: 'Samsung',
        price: '$41.66/mo',
        model: 'Galaxy S10 5G',
        contract: 'For 24 months, 0% APR',
        retailPrice: '$850.99'
    }
]

const publicPath = path.resolve(__dirname, './src/resourse/images');
app.use('/public', express.static(publicPath, { redirect: false }));

app.get('/*', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.json(response);
});

app.listen(7000, ()=>{
    console.log('Server Running on Port 7000')
})