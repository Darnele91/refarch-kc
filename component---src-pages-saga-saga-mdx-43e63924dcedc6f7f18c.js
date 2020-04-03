(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{wj82:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},c=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The SAGA pattern helps to support a ",Object(n.b)("strong",{parentName:"p"},"long running transaction")," that can be broken down into a collection of sub transactions that can be interleaved any way with other transactions. With microservices, each transaction updates data within a single service, each subsequent steps may be triggered by previous completion. The SAGA pattern supports two types of implementation: Choreography and Orchestration. However, the SAGA pattern comes withe the tradeoff that if any of the sub transactions fails, a compensation process must be implemented and executed."),Object(n.b)("p",null,"For more information about the SAGA pattern, read our specific section on it ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/design-patterns/saga/"}),"here"),"."),Object(n.b)("p",null,"In this readme, we are going to focus on the SAGA pattern implementation details for our ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/"}),"Reefer Container Shipment Reference Application"),"."),Object(n.b)("h2",null,"Implementation"),Object(n.b)("p",null,"We have implemented the SAGA pattern in our Reefer Container Shipment Reference Application for the scenario where an order, to carry fresh goods from an origin port to a destination port, is created by a customer. We have decided to implement the Choreography variant of the SAGA pattern."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAByUlEQVQoz02SzW/UMBDF97/nxIUDCCFxqrhwKAdUqRcE4sAJsRVL222yH5Bsko03XsfxOI7tsZkkFeUpenKk+c08j7wAgNtfq80mTZKkmpTneZpu6pqR6rouDvmxLKQQ7HgEUMG74D06G0JYBPTry4u7i1dtkWWHgsqFEE3TdJ2SbWs97j59XL55nl5f3rx9sbn+cPfu9ebq/Y+Xz9jq+yKGoMpDub7njIm2Ncb2xprBkYM2zgdZlSxZQ12ctwkcS75NujI73a+M4IsYo8Vw4G6VNstEPOz5bVp8+1mttmJfwr5U2ck2CqksxFEYnnyEncPB4vZw/rrMeGu0sRKc1B56bwaseX/zcJLiTNeZi+m2znqKPML0Q509/Fbll4g9YrTWdh2wsx6s6we/3jGlwDr0GPw0dPZH2GNEtHZQY6NAsGu42Bed0k4br3pH0cz0FUwB9DUHKeU/OIwY4tyVVt0pODY0GWln/YDWBTqTF6wjMa7b9j94XMPkIUQA3UpF25qx2c3k1o/RskpSzVPs4I0z7cRG0Pos5AgbT0CnaUvRTRjNJ9/moqrqR5gAI//Uu8/oNBU578dX5DxO2uVcaz2HmjN2YOlp/gVzZW78oE89OQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"saga",title:"saga",src:"/refarch-kc/static/238147fc821d66e920ff34944676af49/2faef/Slide1.png",srcSet:["/refarch-kc/static/238147fc821d66e920ff34944676af49/7fc1e/Slide1.png 288w","/refarch-kc/static/238147fc821d66e920ff34944676af49/a5df1/Slide1.png 576w","/refarch-kc/static/238147fc821d66e920ff34944676af49/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"In this scenario, we have a long running transaction that spans across the Order Command microservice that creates the order and maintains the state of it, to the Spring Container microservice that will try to find an empty container with enough capacity in the origin port to allocate to the order, to the Voyage microservice that will try to find a voyage from the origin port to the destination port with enough capacity on the ship for the container allocated to be assigned to the order."),Object(n.b)("p",null,"As you can see in the diagram above, the transaction does not finish until a container has been allocated and a voyage assigned to the order and, as a result, the order stays in pending state until all the sub transactions have successfully finished."),Object(n.b)("p",null,"As to the ",Object(n.b)("strong",{parentName:"p"},"Transaction")," section in the diagram above for the actual create order request from a customer, we explain the reason of it to be a transaction using a command bus for data consistency in the Command Query Responsibility Segregation section ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/design-patterns/cqrs/"}),"here"),"."),Object(n.b)("h2",null,"Compensation"),Object(n.b)("p",null,"As said in the introduction to the SAGA pattern, long running transactions spanning multiple microservices implementing the SAGA pattern come with the tradeoff that a compensation process must also be implemented in the case that one, or multiple, of the sub transactions fails or does not achieve to complete so that the system rolls back to the initial state before the transaction began."),Object(n.b)("p",null,"In our specific case, a new order creation transaction can fail either because we can not find a container to be allocated to the order or we can not find a voyage to assigned to the order."),Object(n.b)("h3",null,"No container"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAB60lEQVQoz0VRTW/TQBDND+rv5MgBqeJAhYQUOAYhPhr1gCgXQKqiRKaQOE6aUH/FXjte2/u9s8s4gnZWGu2O5r03b3bEGPt1e7uJovU6zE8Rx3EUbYqixCiKIk2SQ5a1lJKiaGlTE1IRYqT0zo3A2tXb8XL8nKb3cZJge9M0VVV1XY8ADXD3+eP84mk0nSxePosuJ8Gr8+W7N7PzJ+XP2QgJ+izJw1VNyoZSKbWQWiqDmXGprWvzrAyX7JAe76Ihb6M+j8tlIJt65L3X4OLaBFE1Xzfhvv4dpd+CPNg2u5ztsv5PqasesM35IcA95gFsDGjjtknzdXZft1JI0zLTMWAChIKiFouQ0ObYNBQJDLY6p3Ek9DxQOofMlu279NqDAPBaa/RMjlxpI5QNdwT3qg0YcPqkb0/S/8AWPFitZe8AD4JNdaSbUvXCcgW9MMqAMF4J3c0DysSBsLZtH8DOPfgBR7ueVjWfTl1dedZbLj3nwJjvOhWGgrE8xx85LQzQtPfy4gU5O3NZhgxKSMk4T1IQ0uP1+w+hFNKjjEFX4PKKlfXxpAxY8Ga14pMJKmCFC0mynL7/4KrKt63a7W3bOs7xab9c26urbvxaLuaPY/v/gQowVAB3hR7wbd1QRTv4MTbLTRSRT5fdzc1fUgxmmCvcbgkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no container",title:"no container",src:"/refarch-kc/static/2f9d7af6113bc365c67eb3b6c697ba16/2faef/Slide2.png",srcSet:["/refarch-kc/static/2f9d7af6113bc365c67eb3b6c697ba16/7fc1e/Slide2.png 288w","/refarch-kc/static/2f9d7af6113bc365c67eb3b6c697ba16/a5df1/Slide2.png 576w","/refarch-kc/static/2f9d7af6113bc365c67eb3b6c697ba16/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"When a new order creation is requested by a customer but there is not a container to be allocated to such order, either because the container(s) do not have enough capacity or there is no container available in the origin port for such order, the compensation process for the order creation transaction is quite simple. In fact, there is little to nothing to be done since the Spring Container or Voyages microservices have not carried any action at all yet."),Object(n.b)("p",null,"The Spring Container microservice will emit a ContainerNotFound event that will inform the interested parties (Order Command and Voyages) that there is no container available for a particular order creation request. The Voyages microservices will not need to do anything while the Order Command microservice will transition the order creation request to rejected as a result. It will also emit an OrderRejected event to inform any other interested parties."),Object(n.b)("h3",null,"No voyage"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAB6klEQVQoz0VRyW7UQBCdH8p/cuKABEiE5IBAXIJAiANzYMsFQSSYMGRWzwYe2/HWu+1eqpvyJBEl+bnVeq/qveqBUmoyuVpF0XK5zA4Vx3EUrfK8wMrzPNnH12nCGSvzXByQ1rV3zgMMwLnFmxfT54/o/k+c7JFOKa2qSgiJAgOw/vBudHx/NXx9efogev9q/Ozh/O3L0eN75dXPQfBeZnE6n1VFThntOtN2ptMWUTWdcZ5nabmcq+uEbpaIZBMhv5yOO1YPQggGfEzseFWNlnSxrSdR8nWc/V7TbaZ2qfxbmkoC0nzoC/x/7MXWgjGwismXH3HNO5zJlBWNU63rNOR1e7koGSWUsgPZee+N6bEX4w87O7WT6XmADgAZVkhV0VZbh99sU+BejQUA78DjVOfgdjKK8QxWm4b3jSC0XZcX1WJHRIPhnWytsb4z0GrYJpRzuSeaUHYndn0IuEkFnnNOuVynTaOdttCYWyWmKGrVNm05W+OTHMRoBjVlaadTdIw36LkuSvH5HITwuHrCvLFOm349vUngo1/sRgzW4tzm+El2dOSTBM8KA6cZGw6BksCY+vipkTLgqjQ2okGIJKVlVd/Z7tWNL4redAjaGE6o+PYdAwSlnFShbUHrQIg6Oa3OzvjTk/bi4h+W6GY/BKQ+jQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage",title:"no voyage",src:"/refarch-kc/static/564d5171b41d7f15f3ce8c8664b05cb7/2faef/Slide3.png",srcSet:["/refarch-kc/static/564d5171b41d7f15f3ce8c8664b05cb7/7fc1e/Slide3.png 288w","/refarch-kc/static/564d5171b41d7f15f3ce8c8664b05cb7/a5df1/Slide3.png 576w","/refarch-kc/static/564d5171b41d7f15f3ce8c8664b05cb7/2faef/Slide3.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"This case is, however, a bit more complicate than the previous one as, this time, the Spring Container microservice will have to compensate for the action of allocating a container to the order. As we see, the actions flow remains as expected for the SAGA transaction until the Voyages microservice informs with a VoyageNotFound event that there is no voyage matching the required request of the order. As a result, the Order Command microservice will transition the order to Rejected and emit an OrderRejected event to inform the interested parties. In this case, the Spring Container is one of those interested parties as it will need to kick off the compensation process, which in this case is nothing more than de-allocate the container to the order to make it available for any other coming order."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-saga-saga-mdx-43e63924dcedc6f7f18c.js.map