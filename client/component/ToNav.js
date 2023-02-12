import {Menu} from "antd";
import Link from "next/link";

// Destrustor to avoid using dot like item.product

// https://codepen.io/diegoleme/pen/qBpyvr
const {Item} =Menu // equal to item.menu

const ToNav =() =>{
   return(
    <Menu  mode ="horizontal">
             
   <Item >
     <Link href= "/">App</Link>
   </Item>


     <Item>
     <Link href= "/login"> login
     
     </Link>
   </Item>

   <Item>

     <Link href= "/register">register
     
     </Link>
   </Item> 

</Menu>
   )
   
}

export default ToNav;