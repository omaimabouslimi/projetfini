import React from 'react';
import { Card } from 'antd';
import  ReactStars from 'react-stars'
import { deleteLocalStorage } from '../helpers/localStorage';
import { deleteCookie } from '../helpers/cookies';
import { useNavigate} from "react-router-dom";
const { Meta } = Card;
const PizzaCard = ({food}) =>{
  const navigate = useNavigate()
  const handelLogout = ()=>{
    deleteCookie("token")
    deleteLocalStorage("user")
    navigate("/login")
  }

 
    
  return(
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img style={{width:"150px",height:"110px"}} alt="example" src={`http://localhost:4000/public/${food.image}`} />}
    >
      <Meta title={food.title} description={food.description} />
      {  <ReactStars
                        name="simple"
                        count={5}
                  
                        size={24}
                        color={"#ffd700"}
                        edit={true}
                           
                        
                        />
                        
                    }
                    <div style={{display:"flex",justifyContent:"space-around"}} >
                        <h2>{food.price}DT</h2>
                        <button  onClick={()=>handelLogout()} style={{border:"none",borderRadius:"10px"}}>Acheter</button>
                        </div>
    </Card>
  )
} 
export default PizzaCard;