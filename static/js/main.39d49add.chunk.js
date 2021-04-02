(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(t,e,c){},35:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),i=c(19),r=c.n(i),o=c(18),s=c(7),d=(c(25),c(12)),u=c(2),j=c(4),m=c(0),b=function(){return Object(m.jsxs)("div",{id:"homeContainer",children:[Object(m.jsx)("div",{id:"homeBackground"}),Object(m.jsxs)("div",{id:"homeMessageContainer",children:[Object(m.jsx)("h1",{children:"Limited Edition Funko Pops"}),Object(m.jsx)("h3",{children:"Now available with free shipping."}),Object(m.jsx)(j.b,{to:"/shop",className:"homeShopLink",children:"Shop Now"})]})]})},l=function(t){return Object(m.jsxs)("div",{className:"productCardContainer",children:[Object(m.jsx)("div",{className:"productCardImage",children:Object(m.jsx)("img",{src:"https://raw.githubusercontent.com/jonathanyu1/shopping-cart-imgs/main/".concat(t.imgName),alt:"".concat(t.name," funko")})}),Object(m.jsx)("div",{className:"productCardName",children:t.name}),Object(m.jsx)("div",{className:"productCardPrice",children:t.price})]})},h=[{imgName:"funkoCrossbones.jpg",id:"funkoCrossbones",name:"Crossbones",price:14.99,quantity:1},{imgName:"funkoCyborg.jpg",id:"funkoCyborg",name:"Cyborg",price:10.99,quantity:1},{imgName:"funkoFalcon.jpg",id:"funkoFalcon",name:"Falcon",price:10.99,quantity:1},{imgName:"funkoFlash.jpg",id:"funkoFlash",name:"The Flash",price:19.99,quantity:1},{imgName:"funkoLockjaw.jpg",id:"funkoLockjaw",name:"Lockjaw",price:17.99,quantity:1},{imgName:"funkoRiddler.jpg",id:"funkoRiddler",name:"Riddler",price:18.99,quantity:1},{imgName:"funkoScarlet.jpg",id:"funkoScarlet",name:"Scarlet",price:15.99,quantity:1},{imgName:"funkoThor.jpg",id:"funkoThor",name:"Thor",price:21.99,quantity:1},{imgName:"funkoWar.jpg",id:"funkoWar",name:"War Machine",price:22.99,quantity:1}],O=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){n(h)}),[]),Object(m.jsx)("div",{id:"shopContainer",children:c.map((function(t){return Object(m.jsx)(j.b,{to:"/shop/".concat(t.id),children:Object(m.jsx)(l,{id:t.id,name:t.name,imgName:t.imgName,price:t.price,quantity:t.quantity},t.id)},t.id)}))})},p=function(t){var e=Object(a.useState)([]),c=Object(s.a)(e,2),n=c[0],i=c[1];Object(a.useEffect)((function(){i(t.cartItem)}),[]);return Object(m.jsxs)("div",{className:"cartCardContainer",children:[Object(m.jsx)("div",{className:"cartCardImage",children:Object(m.jsx)("img",{src:"https://raw.githubusercontent.com/jonathanyu1/shopping-cart-imgs/main/".concat(n.imgName),alt:"".concat(n.name," funko")})}),Object(m.jsxs)("div",{className:"cartCardDetails",children:[Object(m.jsx)("div",{className:"cartCardName",children:n.name}),Object(m.jsx)("div",{className:"cartCardPrice",children:n.price}),Object(m.jsxs)("div",{id:"cartCardQuantityContainer",children:[Object(m.jsx)("label",{htmlFor:"quantity",children:"Quantity: "}),Object(m.jsx)("input",{type:"number",name:"quantity",className:"cartCardQuantity",min:"1",max:"99",value:n.quantity||"1",onChange:function(e){t.changeProductQuantity(n.id,e.target.value)}})]}),Object(m.jsx)("button",{className:"btnRemoveItem",onClick:function(){return t.removeProduct(n.id)},children:"Remove item"})]})]})},f=function(t){var e=Object(a.useState)([]),c=Object(s.a)(e,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){r(t.cartItems)}),[]),Object(a.useEffect)((function(){r(t.cartItems)}),[t.cartItems]),Object(m.jsx)("div",{id:"cartContainer",children:i.length>0?Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)("div",{id:"cartTitle",children:"Shopping Cart"}),i.map((function(e){return Object(m.jsx)(p,{cartItem:e,changeProductQuantity:t.changeProductQuantity,removeProduct:t.removeProduct},e.id)})),Object(m.jsxs)("div",{id:"cartTotalContainer",children:[Object(m.jsxs)("div",{id:"cartSubtotal",children:["Subtotal: ",t.subtotal]}),Object(m.jsx)(j.b,{to:"/",children:"Checkout"})]})]}):Object(m.jsxs)("div",{id:"cartEmptyContainer",children:[Object(m.jsx)("div",{id:"cartEmptyMessage",children:"Your cart is empty."}),Object(m.jsx)("span",{className:"material-icons",children:"shopping_bag"})]})})},x=function(){return Object(m.jsx)("div",{id:"errorContainer",children:"404 Error: Page not found"})},g=function(t){return Object(m.jsxs)("div",{id:"productPageContainer",children:[Object(m.jsx)("img",{src:"https://raw.githubusercontent.com/jonathanyu1/shopping-cart-imgs/main/".concat(t.product.imgName),alt:"".concat(t.product.name," funko"),className:"productPageImage"}),Object(m.jsxs)("div",{className:"productPageDetails",children:[Object(m.jsx)("div",{className:"productPageCardName",children:t.product.name}),Object(m.jsxs)("div",{className:"productPageCardPrice",children:["$",t.product.price]}),Object(m.jsx)("button",{className:"btnAddCart",onClick:function(){return t.addProductToCart(t.product)},children:"Add to cart"}),Object(m.jsx)(j.b,{to:"/cart",className:"cartLink",children:"Go to Checkout"})]})]})},v=function(t){return Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(m.jsx)(u.a,{exact:!0,path:"/shop",component:O}),Object(m.jsx)(u.a,{exact:!0,path:"/cart",render:function(e){return Object(m.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{cartItems:t.cartItems,changeProductQuantity:t.changeProductQuantity,subtotal:t.subtotal,removeProduct:t.removeProduct}))}}),Object(m.jsx)(u.a,{path:"/shop/:id",render:function(e){return Object(m.jsx)(g,Object(d.a)(Object(d.a)({},e),{},{product:t.getProductById(e.match.params.id),addProductToCart:t.addProductToCart}))}}),Object(m.jsx)(u.a,{component:x})]})},C=function(t){var e=Object(u.f)(),c=Object(a.useState)("white"),n=Object(s.a)(c,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){r("/"===e.pathname?"white":"black")}),[e]),Object(m.jsx)("div",{id:"navContainer",children:Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)("div",{id:"navHeaderContainer",children:Object(m.jsx)(j.b,{to:"/",className:"white"===i?"navWhite":"navBlack",children:Object(m.jsx)("div",{id:"navHeader",children:"Funko King"})})}),Object(m.jsxs)("ul",{className:"navTabs",children:[Object(m.jsx)(j.b,{to:"/",className:"white"===i?"navWhite":"navBlack",children:Object(m.jsx)("li",{children:"Home"})}),Object(m.jsx)(j.b,{to:"/shop",className:"white"===i?"navWhite":"navBlack",children:Object(m.jsx)("li",{children:"Shop"})}),Object(m.jsx)(j.b,{to:"/cart",className:"white"===i?"navWhite":"navBlack",children:Object(m.jsxs)("li",{id:"navCartContainer",children:[Object(m.jsx)("span",{id:"navCartIcon",className:"material-icons",children:"shopping_cart"}),"(",t.numCartItems,")"]})})]})]})})},N=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),c=e[0],n=e[1],i=Object(a.useState)(0),r=Object(s.a)(i,2),d=r[0],u=r[1],b=Object(a.useState)(0),l=Object(s.a)(b,2),O=l[0],p=l[1],f=function(t,e){var a=Object(o.a)(c);a.forEach((function(c){console.log(c),console.log(c.id),console.log(t),c.id===t&&(Number(e)<=0&&(e=1),c.quantity=Number(e))})),n(a)};return Object(a.useEffect)((function(){!function(){var t=0;c.forEach((function(e){t+=e.quantity})),u(t)}(),function(){var t=0;c.forEach((function(e){t+=e.price*e.quantity})),p(t.toFixed(2))}()}),[c]),Object(m.jsx)(j.a,{basename:"/",children:Object(m.jsxs)("div",{id:"siteContainer",children:[Object(m.jsx)(C,{numCartItems:d}),Object(m.jsx)(v,{getProductById:function(t){return h.find((function(e){return e.id===t}))},addProductToCart:function(t){-1===c.indexOf(t)?(t.quantity=1,n([].concat(Object(o.a)(c),[t]))):f(t.id,t.quantity+1)},removeProduct:function(t){n((function(e){return e.filter((function(e){return e.id!==t}))}))},cartItems:c,changeProductQuantity:f,subtotal:O})]})})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.39d49add.chunk.js.map