import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

// const ReactElement = {//can we understand this syntax,whic type syntax react are using,see reactElement
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'

//     },
//     children: 'click me to visit google'
// }//we can call it like tag because it is not funnction this is object and it syntax not correct

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google </a>//=>this also converts in tree
)// this can we called beacuse this will convert to object but upper is not run why? => because syntax is not correct

const anotherUser = "chai aur react"//inject variable 
const reactElement = React.createElement(//this syntax is fixed we cannot do according to us
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser//evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // <MyApp/>
    // MyApp()=>we can also like this but not use this
    // anotherElement//we call object like this
    reactElement
    // <App/>

)
