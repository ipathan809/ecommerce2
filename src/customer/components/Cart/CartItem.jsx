import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {
    const dispatch=useDispatch();
      
    const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity+num},cartItemId:item?.id}
        dispatch(updateCartItem(data));
    }
     
    const handleRemoveCartItem=()=>{
        console.log("inside remove cart");
        dispatch(removeCartItem(item.id));

    }

    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top"
                        src={item.product.imageUrl} alt="" />

                </div>

                <div className="ml-5 space-y-1">
                    <p className="font-semibold"> {item.product.title}</p>
                    <p className="opacity-70">Size: {item.size},White</p>
                    <p className="opacity-70 mt-2">Seller:{item.product.brand}</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>₹{item.price}</p>
                        <p className='opacity-50 line-through'>₹{item.discountedPrice}</p>
                        <p className='text-green-600 font-semibold'>{item.discountPersent}% off</p>
                    </div>
                </div>

            </div>
              <div className="lg:flex items-center lg:space-x-10 pt-4">

                    <div className="flex items-center space-x-2">
                        <IconButton onClick={()=>handleUpdateCartItem(-1) }
                         disabled={item.quantity<=1}>
                          <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className="py-1px-7 border rounded-sm">{item.quantity}</span>
                        <IconButton  onClick={()=>handleUpdateCartItem(1) } sx={{color:"RGB(145 85 253)"}}>
                          <AddCircleOutlineIcon/>
                        </IconButton>
                       
                        
                    </div>

                    <div>
                        <Button onClick={()=>handleRemoveCartItem(item.id)} sx={{color:"RGB(145 85 253)"}}>
                            remove
                        </Button>
                    </div>

                </div>

        </div>
    )
}

export default CartItem;