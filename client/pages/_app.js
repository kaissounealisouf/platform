
// _app, why _app uses the App component to initialize
// import css 
import ToNav from "../component/ToNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd";
import "../public/style.css";

// THe _app.js handle the whole application 

const MyApp =({Component,pagesProps})=>{
    return (
       <>   
            <ToNav />
           <Component {...pagesProps}/>
         
           </>
    )
}
export  default MyApp;

// const MyApp =({Component,pagesProps})=><Component {...pagesProps} />
// npm i antd bootstrap