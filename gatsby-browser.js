/*
Because this is using CommonJS cannot add import bootstrap command here
Instead bootstrap is imported in Components/Layout/index.js
*/

const React = require('react');
const Layout = require('./src/components/Layout').default;


exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}