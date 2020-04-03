(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"2S6Z":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var i=t("7ljp"),r=t("013z");t("qKvR");function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var c={},o={_frontmatter:c},s=r.a;function d(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(i.b)(s,n({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here you can find two test cases to test the SAGA pattern implemented for our Reefer Container EDA reference application. These test cases verify a new order creation does not get into assigned state unless a container and a voyage are allocated and assigned to it. These test cases are meant to be executed after the ",Object(i.b)("a",n({parentName:"p"},{href:"../happy-path/happy_path.md"}),"happy path test case"),". Since the case that a container is allocated and a voyage assigned to an newly created order is tested previously by our happy path test case, in these test cases we’re actually testing the behavior when either a container or  a voyage does not exist for the order."),Object(i.b)("h2",null,"SAGA pattern - no container"),Object(i.b)("p",null,"This test case will ensure that the SAGA pattern for our EDA application works as expected by setting the newly created order to ",Object(i.b)("strong",{parentName:"p"},"rejected")," as a result of not finding a suitable container available for the order. The following diagram depics roughly this case on a flow base fashion where the blue square rectangles, purple rounded rectangles and orange rectangles represent actions taken by the test case, events produced to the event backbone (either Kafka or IBM Event Streams) and object statuses respectively."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABE0lEQVQoz6VSQU7DMBAsnKE3eAbiEYgHUL4I4lAhblwQogg4tEIq4tCGBloT04Q2Ma5T2yTxOthIIFJIEGIPq7U0s7OjcS3/R9U+J61zHPGbAR4Tqc3jr2Qv5Ne9IY4EAHzB6N/JppQCSnzT33dp0LkCe4OZExEnnOnC0qKyg8h5+85BL4z6IWFd5/nWDcd+kErqdS9R5zRXWalyEM57A+xP4zSVcSwf0HT0GM1mLEsEDxDFrsrKyQs+M5CpEhXWF8naerXGorNWu7Hb2WlMri4SRltb2ycbm6+eZ0Efzn9Q1kqZ/rS331ytH67UUfNAkMnx2vrR0rIYjiyggpx/SwmUEv0+d++hmH852eBMWAAVH+YNH0V0vKl/KLIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"flow_container",title:"flow_container",src:"/refarch-kc/static/53da06aafadd0c3522cc7add411295f2/2faef/Slide1.png",srcSet:["/refarch-kc/static/53da06aafadd0c3522cc7add411295f2/7fc1e/Slide1.png 288w","/refarch-kc/static/53da06aafadd0c3522cc7add411295f2/a5df1/Slide1.png 576w","/refarch-kc/static/53da06aafadd0c3522cc7add411295f2/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The following sequence diagrams represent each of the tests within this SAGA pattern - no container integration test case."),Object(i.b)("h3",null,"Test 1 - No Container - Create order"),Object(i.b)("p",null,"This test will make sure that the expected CreateOrderCommand event to create an order is delivered into the order-commands topic after the Create Order API endpoint is called. It will also ensure that an OrderCreated event is also delivered into the orders topic."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABj0lEQVQoz32RTYvbMBCG/f973kMOeyhLoadloZcUcthCf0Eo3di1HTtxHH/IsiTHjvU16sTehBKWDmIQYp6Zd155fd8Hvh9H0SHLwjDc+D4hDW0vQQiRSjkAqxVYa7V21tzuAOBZo+PlS/D8xIt8t8+qqhLiRCnjouOMG+eyn6vfnx+yH9/fviz2r0v/62O6+rZefKL+Lw8bn5u6K3I59DXt+kFqbeYjpbLgBlKxbXTJaTzUFd9t++pIw43quOecA+fEoFBschS819aC0qgPMyCMIY2by+7yBAPwTjKBQ42xblTQDXod0kPFS8L+JPUmoXI8oxYsxq4XF6bsIYlPUcbSQ90J0TQUd8aZhIqiJC2lQdrm9UlrZSYZ9p88T3ZM9EVRBAnhJ4UvWGcBhlGPiFiX5ELK8WMYja/rI6VtvE0P+fF8HudVqVDRvi3LEi24w97hSbXbxMSP0C7GmBiVxWp0WhvcCZRSxsDH8E12WVZB2oir7Msxs6nuv7DVbVMgHCc7FD/7P8XMXr8H7r/qLwhJdMz2N67OAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no container create order",title:"no container create order",src:"/refarch-kc/static/4ee6c3de3e458c50d1758756fc9d707c/2faef/Slide2.png",srcSet:["/refarch-kc/static/4ee6c3de3e458c50d1758756fc9d707c/7fc1e/Slide2.png 288w","/refarch-kc/static/4ee6c3de3e458c50d1758756fc9d707c/a5df1/Slide2.png 576w","/refarch-kc/static/4ee6c3de3e458c50d1758756fc9d707c/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 2 - No Container - Container Not Found"),Object(i.b)("p",null,"This test will make sure that the expected ContainerNotFound event is delivered into the orders topic once the Spring Container microservice could not find a container suitable for the order available."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABO0lEQVQoz5WRyU7DQAyG8/6cOfTABYHECQ5cWokDfQWEoCltIW0KdJLOkj2z2MwCbYWEVCzLM2P58+/EUV3X0zhezOdpmr7MZpM4zvMtZYxS686qsgStwBijFBptlAx3AIiMVovhzfT6oso2ySolZFMUFaVcFKXgQhpIxqOn89PVePR8OVjdD+Ors+Tu9mFwQuPHCAFamov39GO9zres7WQvldLO+l4CYrPN+Nu8zQlPFk1GxPK1Jh90NpGliBAtjr1BxjkvmuWmtk/wpjVa2BX8EQMMVWPVIDTSBo33kLEp+40uavPrHoEvWH5WOWsJIYwJ7TDjXAUBNP40/jiM38raEohKSdv4Z2zU+gjY/njOMruqJEnsbhwOoeNxyl3XSW9Kqf/C6KfGXamHjxs7iO9g2O1jn9s/D1f1BU4MfMRXB84mAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no container container not found",title:"no container container not found",src:"/refarch-kc/static/cbe3662046bd09c770369837687c15c1/2faef/Slide3.png",srcSet:["/refarch-kc/static/cbe3662046bd09c770369837687c15c1/7fc1e/Slide3.png 288w","/refarch-kc/static/cbe3662046bd09c770369837687c15c1/a5df1/Slide3.png 576w","/refarch-kc/static/cbe3662046bd09c770369837687c15c1/2faef/Slide3.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 3 - No Container - Order Rejected"),Object(i.b)("p",null,"This test will make sure that the expected OrderRejected event is delivered into the orders topic after the Order Command microservice received the ContainerNotFound event."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABRElEQVQoz5VRy07DMBDM/3Pm0AMHhJC4IA5cisQBJL4AIWiq9JWmah6N6yaOHT92jeOitKoEKpY9ttc7nlk7aJpmHIbTyWSVJFEUjcJwU5YlIWS7zYuiZrVFBK0QALS2YPo1IgZg9HT4ML6/2a5Xs0WcZVlVMULorqoppRpt8vb8eX2ZvD593Q6WL8Pw7mrx/Pg+uCDhR+AuFmXB8xSUEm0LYKTS2hjXW6nAWr7J6XwiHC6mvMh38azJ1yQaqXoXWN+EMs5txThlGpxPtABojEV/+ht2ZOeec8m5aIRKS4HYRRwa43Owq7FDAyfrAH3CfN1saMsYa9vWvYXW4PtewIKfwU/H+KOsdHelEK5qCSfKf5ONUQ0jaZot45ixGjzTjbPILs+5lVI6ZaUkwP/I1tXfN2/bnmt7L96Tsf+PQ+ywPf6qb0+MfTl9EsQyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no container order rejected",title:"no container order rejected",src:"/refarch-kc/static/fca5122c8c613601906c0100f06a280d/2faef/Slide4.png",srcSet:["/refarch-kc/static/fca5122c8c613601906c0100f06a280d/7fc1e/Slide4.png 288w","/refarch-kc/static/fca5122c8c613601906c0100f06a280d/a5df1/Slide4.png 576w","/refarch-kc/static/fca5122c8c613601906c0100f06a280d/2faef/Slide4.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 4 - No Container - Order Rejected REST"),Object(i.b)("p",null,"This test will make sure that the order is set to ",Object(i.b)("strong",{parentName:"p"},"rejected")," through the Order Command and Order Query microservices."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABZUlEQVQoz5WRPU/DMBCG8/+ZGUBiQAiJCQaWIhiAn4AQNFXTqm1Km9TxZ5ym/jhzTiqEoAycrEeWfe/5PV+itR6l6STLlnk+Ho+HaUqqqqIYjJCKEKJrBc6B997a4J23pt8DQOKdzQY3o+sLVRazRV6sCylrSrmQinOx8zB/vn87P1483b1fni4eB+nV2ezh9uXkiKavSQBoKZGrnG5Kxrlz1hjrujDGQAgN2bBp1pCSTSdIMZ/qckXHQ6NEEkLADNnY5ce6JGJeNN6DddGp82gQL4OL2LPDnlGMLeimtdYzJiivUWmxNedNp8cqeIUGe2JypIvsxM7UknDO4/doCYDnMXxfH9/sHu3Ze+m5t91sd3meS6W3+JcA/xFDUHqnlK5YneUC3bm4ADeYg8tY6HlAjNOSkgmhiqJglH71bON04zLGR2KxA2KcudnhiNq2jVm/e/Z/2/4R0E8CAnw7iQKAH6P6BHJtewYkhlvoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no container order rejected REST",title:"no container order rejected REST",src:"/refarch-kc/static/736f14510785161182e2c122905ed689/2faef/Slide5.png",srcSet:["/refarch-kc/static/736f14510785161182e2c122905ed689/7fc1e/Slide5.png 288w","/refarch-kc/static/736f14510785161182e2c122905ed689/a5df1/Slide5.png 576w","/refarch-kc/static/736f14510785161182e2c122905ed689/2faef/Slide5.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"SAGA pattern - no voyage"),Object(i.b)("p",null,"This test case will ensure that the SAGA pattern for our EDA application works as expected by setting the newly created order to ",Object(i.b)("strong",{parentName:"p"},"rejected")," as a result of not finding a suitable voyage available for the order. The following diagram depics roughly this case on a flow base fashion where the blue square rectangles, purple rounded rectangles and orange rectangles represent actions taken by the test case, events produced to the event backbone (either Kafka or IBM Event Streams) and object statuses respectively."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABjklEQVQoz41RS07DMBDNDeAM5SQVt4DDwB1gh1ggwQ6xYQFC7Pi0FRBUVNKShH6S0jQfJ46TOk7GSXFkhChigTUjzcjvjZ/fKIucG7ZvTFFE0iLPZiEdjOcuZst/HAVT6PTGHc12PD+nsekkd11jEtB/kUVmNM4WWPYAEEdOWVbfiKqq65JzyBkvihUyoaD2xiISCqLXJ+H9k27amCaBHy20YaBbsY9Q4o6G7avUGcl5X+SE8mfNFpFmXPSTGe4OLHseFywJCeu/u4YV4phQNHP7j8SbrZBFMorZIpIav8XKmqaoyMjq1Q/ZnHPrpT3tdTjU/yHBfHB/jWyTZdhFaXcwfTUdyoSoqgSoynKVDBAZaqCr0gwaek73Bk/fi5zMPXLb1jqqSTP482lFmFlxECOkq6JYQg5FIaG8ZCLqLSRJZpq5H/xe1c+VpMjVW9eRZfBlaR+f3DabreZm+KaNDg+OFEXd2q6RAL/J0kMWo9B4Ih8jtoTh3v55o3HR2PAeWvbZ6eXaen9ntwZyLhmfsDpmfnKCHc4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"flow_voyage",title:"flow_voyage",src:"/refarch-kc/static/cc47f89f2a37445cbc155f70d8960e20/2faef/Slide1.png",srcSet:["/refarch-kc/static/cc47f89f2a37445cbc155f70d8960e20/7fc1e/Slide1.png 288w","/refarch-kc/static/cc47f89f2a37445cbc155f70d8960e20/a5df1/Slide1.png 576w","/refarch-kc/static/cc47f89f2a37445cbc155f70d8960e20/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The following sequence diagrams represent each of the tests within this SAGA pattern - no voyage integration test case."),Object(i.b)("h3",null,"Test 1 - No Voyage - Create container"),Object(i.b)("p",null,"This test will make sure that the expected ContainerAdded event to create a new container is delivered into the containers topic. It will then make sure the container is properly created through the Spring Container API endpoints."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABfUlEQVQoz41RPU/DMBDt/2dmYGBACIkJBpYiMYD4BVQIGkhK05R+xLFjO7ab+JNzUyhl4nw6ny96uXfvBlLKtySZZNnnfJ6m6ThJqgqTOhrGmFLqnXNGb6MJzv7k3vuBszYbXr9fnbPVYjafo7JkXBBCGW8YZdr54vHu5ey4eLh9vTgp7ofJ5Wl+dzM6OSLJ8yB4v8GILxetkmvMuWy1MdpYsK4zPgSJSjrNVFXSfCLRmuYfqlySdKwbNggB4IErzTkbpTj7FFBxzkcLB9Y/3a/8G9xsSA1URVpQ1VqYCLwRirKmrplUrbNebcx7wWoOuYGzAztnCamWy/U0n4FW2njnA7i1oAxoAipFFhC5NOMpqQlu224PFoISUKnGSgljI+PfvJ3vY7yMdf1cOzAYa1pU4QUSTIBYXuu4C6BgbfQ+0SYWO30IhhYwcMPZ01uZr6JgkaffNfzTGf5yAIaVNxwjVFVo3bUb4NVz/hf4R3rfexx4X9yvqi9ur/7TFyY3eCL4nyBzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage create container",title:"no voyage create container",src:"/refarch-kc/static/8e90bb9c592ca2efa2892999bde87ce3/2faef/Slide2.png",srcSet:["/refarch-kc/static/8e90bb9c592ca2efa2892999bde87ce3/7fc1e/Slide2.png 288w","/refarch-kc/static/8e90bb9c592ca2efa2892999bde87ce3/a5df1/Slide2.png 576w","/refarch-kc/static/8e90bb9c592ca2efa2892999bde87ce3/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 2 - No Voyage - Create order"),Object(i.b)("p",null,"This test will make sure that the expected CreateOrderCommand event to create an order is delivered into the order-commands topic after the Create Order API endpoint is called. It will also ensure that an OrderCreated event is also delivered into the orders topic."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABj0lEQVQoz32RTYvbMBCG/f/33MMeethCoZfSw16ykEML/QVLaWOv7diJ409ZluTYsb5GO7a7SwmhgxiEmGfmnVfeMAyB78dRdMqyMAx3vk9IS7s5CCFSKQdgtQJrrdbOmvc7AHjW6GjzLfj6iRX54ZjVdS3EmVLGRc8ZN85lP7e/Hz5kP57+fL4/ft/4Xz6m28fn+zvq//Kw8aVt+iKX49DQfhil1mY9UioLbiQ120dzTuOxqflhP9QFDXeq555zDpwTo0KxSSH4oK0FpVEfZkAYQxq3ll3lBQbgvWQChxpj3aSgH/VzSE81rwh7SZpdQuV0QS1YjF1nF5bsIYlPUcbSU9ML0bYUd8aZhIqyIh2lQdrlzVlrZRYZ9p+8TnZMDGVZBgnhZ4UvWGcBxklPiFiX5ELK6TaMxjdNQWkX79NTXlwu07oqFSo6dlVVoQVX2F94Ue12MfEjtIsxJiZlsRqd1gZ3AqWUMXAbfpddVXWQtuJN9nzMaqr7L2x115YIx8kBxa/+L7Gyb98D11/1CvgBdMUR6cHrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage create order",title:"no voyage create order",src:"/refarch-kc/static/deb1b4e824fad7a5fa3337a39af30f49/2faef/Slide3.png",srcSet:["/refarch-kc/static/deb1b4e824fad7a5fa3337a39af30f49/7fc1e/Slide3.png 288w","/refarch-kc/static/deb1b4e824fad7a5fa3337a39af30f49/a5df1/Slide3.png 576w","/refarch-kc/static/deb1b4e824fad7a5fa3337a39af30f49/2faef/Slide3.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 3 - No Voyage - Container Allocated"),Object(i.b)("p",null,"This test will make sure that the expected ContainerAssignedToOrder event is delivered into the containers topic as well as the expected ContainerAllocated event is delivered into the orders topic. It will then verify the container state is as expected through the Spring Container API endpoint."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABb0lEQVQoz41Ry07DMBDM/3Pm0AMXEBInOHDgIQ7AJyAETdu0eThJYzuO81Zie42T0ALl0lU0Gs3uZta7Vl3XC9teOw5CaLlazW2b0pRlGWPDR1PaNg1IAUopIbSSSvQTBwBLSeHc3SyuL0qc+CjEGBdlxRjPizLP804q//Xx4/w0eHn4vJwFz/f21Zn3dPs2O2H2u6UB2pQUUZDEEaZp2/Vd1ws5hCGgdUMJd52WYu6tG5Jwb1PjmK3mfZlbWpsCjUgbxDTllbutALQCMxpIOeb0H1Tww62RKrRlOC2CIRDPy67vzS+knAqHN+5RipHLAYdmpSRnsee6foDGV9PaLGnfvHMz4xicRDVK1pReBtyPeZbXm6gyrkJCL4aN/m8WB80AgqQ02hLPc+MoNJcaBzzO2bDxMIXZNqFpWbWTc9crUyoHPqGa9ANnoCxLCHVQYUSzC2NibMQxzqBExpIwjKIolmMSvtesf8dOhP2pvgCEpXbdI5ov8gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage container allocated",title:"no voyage container allocated",src:"/refarch-kc/static/88eb19b00555944a2263ce69bb3ee09f/2faef/Slide4.png",srcSet:["/refarch-kc/static/88eb19b00555944a2263ce69bb3ee09f/7fc1e/Slide4.png 288w","/refarch-kc/static/88eb19b00555944a2263ce69bb3ee09f/a5df1/Slide4.png 576w","/refarch-kc/static/88eb19b00555944a2263ce69bb3ee09f/2faef/Slide4.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 4 - No Voyage - Voyage Not Found"),Object(i.b)("p",null,"This test will make sure that the expected VoyageNotFound event is delivered into the orders topic."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABQklEQVQoz41RS0/DMAzu/+fMYQcuk5C4IA5chuAA/ASEYEHttq4bo1vfXZI2sR3SVHtoEmhW4kfsL18ce5zzL8YmQbBcLHzfHzOWJGmW50maWicvCtW2BJoQUWuDgFr1PhF5CDoY3bHbYf69nIZRHMdVtc2yoigruxWa6PXxY3gZvTx8Xg+i5xG7uQqf7t8GFxl79wyRTDciXtkrpWwQoVVagxVsW0XGiGRdzAJpdTgRm3U5n/L1KvPHqi4940Qq2CRJXfNyq5EIySASgCGX/Ut3YCLDecO54FKtUmlD6sQAuBrqeuw04InvkSuY/fA45VVVAWilSWt0qycw6Cw6c6w9lyMLUEoLIbQFnTD/DwZQYpvbf56HYV3XOzCdBbZ1TdNIKS2zdQCpb/tMsLH978Uxm3Of3ZPvwbSfx+HsEB6P6hfe8Hz5IZtBugAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage voyage not found",title:"no voyage voyage not found",src:"/refarch-kc/static/0632d9523b4152d9f3800d61e406b348/2faef/Slide5.png",srcSet:["/refarch-kc/static/0632d9523b4152d9f3800d61e406b348/7fc1e/Slide5.png 288w","/refarch-kc/static/0632d9523b4152d9f3800d61e406b348/a5df1/Slide5.png 576w","/refarch-kc/static/0632d9523b4152d9f3800d61e406b348/2faef/Slide5.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 5 - No Voyage - Order Rejected"),Object(i.b)("p",null,"This test will make sure that the expected OrderRejected event is delivered into the orders topic after the Order Command microservice received the ContainerNotFound event."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABRElEQVQoz5VRy07DMBDM/3Pm0AMHkJC4IA5citQDSHwBQtCgpM+UNknjpokf8WPXOG6VVpVAxbLH9nrHM2sHjLGvMBzF8SJJoigahuG6KApCyGaT5XlNa4sIWiEAaG3BdGtEDMDouP8Q3t9svhfj6TxN06qihJTbqi7LUqNNXgcf15fJy9PnbW/+3A/vrqaDx7feBQnfA3exKHKWLkEp0TQARiqtjXG9kQqs5eusnMTC4XTE82w7G7NsSaKhqreB9U0o49xWlJdUg/OJFgCNsehPf8OW7NxzLjkXTKhVIRDbiENjfA62NbZo4GQdoE+YLNm6bCilTdO4t9AafN8JWPAz+OkY98pKt1cK4aqWcKL8N9kYxShZrdL5bEZpDZ7pxllkl+fcSimdslIS4H9k6+rvmrdtz7W9E+/I2P3HIXbYHn/VD0IffTM0u01uAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage order rejected",title:"no voyage order rejected",src:"/refarch-kc/static/ddbea6b8ba9092f48da6f87a00601823/2faef/Slide6.png",srcSet:["/refarch-kc/static/ddbea6b8ba9092f48da6f87a00601823/7fc1e/Slide6.png 288w","/refarch-kc/static/ddbea6b8ba9092f48da6f87a00601823/a5df1/Slide6.png 576w","/refarch-kc/static/ddbea6b8ba9092f48da6f87a00601823/2faef/Slide6.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 6 - No Voyage - Order Rejected REST"),Object(i.b)("p",null,"This test will make sure that the order is set to ",Object(i.b)("strong",{parentName:"p"},"rejected")," through the Order Command and Order Query microservices."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABZUlEQVQoz5WRPU/DMBCG+/+ZGUBiQAiJCQYGQDAAPwEhaKqmVduUNqnjzzhN/HHmnFQIQRk4WY8s+97ze76B1nqUJJM0XWbZeDweJgkpy5JiMEJKQoiuFDgH3ntrg3femn4PAAO8SG+uRpdnqljPFlm+zqWsKOVCKs5F62H+fP92erh4uns/P1483iYXJ7OH65ejA5q8DgJAU27kKqObgnHunDXGui6MMRBCTTZsmtakYNMJUsynuljR8dAoMQghYIas7fJjXRAxz2vvwbro1Hk0iJfBRezYYccoxhZ03VjrGROUV6i02JrzptNjFbxCgz0xOdJFdmJnKkk45/F7tATA8xi+r49vdo/27L303Nmut22WZVLpLf4lwH/EEJRuldIlq9JMoDsXF+AGc3AZCz33iL2zUjIhVJ7njNKvnm2cblzG+EgstkeMMzctjqhpmpj1u2f/t+0fAf0kIMC3kygA+DGqT247ewS56MqtAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"no voyage order rejected REST",title:"no voyage order rejected REST",src:"/refarch-kc/static/ff66421dde12f96945227ecdd459372a/2faef/Slide7.png",srcSet:["/refarch-kc/static/ff66421dde12f96945227ecdd459372a/7fc1e/Slide7.png 288w","/refarch-kc/static/ff66421dde12f96945227ecdd459372a/a5df1/Slide7.png 576w","/refarch-kc/static/ff66421dde12f96945227ecdd459372a/2faef/Slide7.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-itg-tests-saga-saga-mdx-172d510b5bab930726a3.js.map