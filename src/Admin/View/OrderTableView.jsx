import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from "../../State/Admin/Order/Action";
import { Avatar, AvatarGroup, Button, Card, CardHeader } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const OrdersTable = () => {

    const [anchorEl, setAnchorEl] = React.useState([]);

    const handleClick = (event,index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorEl(newAnchorElArray);
      };

    const open = Boolean(anchorEl);
   
    const handleClose = (index) => {
        const newAnchorElArray=[...anchorEl];
        newAnchorElArray[index]=null
        setAnchorEl(newAnchorElArray);
    };

    const dispatch = useDispatch();

    const { adminOrder } = useSelector(store => store);

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,
    adminOrder.deletedOrder])

    console.log("admin orders", adminOrder);

    const handleShipOrder= (orderId) => {
        dispatch(shipOrder(orderId));
        handleClose();
    }

    const handleConfirmOrder= (orderId) => {
        dispatch(confirmOrder(orderId));
        handleClose();
    }

    const handleDeliverOrder= (orderId) => {
        dispatch(deliveredOrder(orderId));
        handleClose();
    }

    const handleDeleteOrder= (orderId) => {
        dispatch(deleteOrder(orderId));
        handleClose();
    }

    

    return (
        <div className="p-10">
            <Card className="mt-2">
                <CardHeader title="Recent Orders" />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Total Price</TableCell>
                                <TableCell align="left">Status</TableCell>
                                
                                
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.slice(0,9).map((item,index) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                                            {item.orderItems.map((orderItems) => <Avatar
                                                src={orderItems.product.imageUrl}></Avatar>)}
                                        </AvatarGroup>

                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.orderItems.map((orderItems) => <p>
                                            {orderItems.product.title}</p>)}
                                        {/* {item.title} */}
                                    </TableCell>

                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left">{item.totalPrice}</TableCell>
                                    <TableCell align="left"><span className={`text-white px-5 py-2
                                    rounded-full
                                    ${item.orderStatus==="CONFIRMED"?"bg-[green]":
                                    item.orderStatus==="SHIPPED"?"bg-[blue]":
                                    item.orderStatus==="PLACED"?"bg-[green]":
                                    item.orderStatus==="PENDING"?"bg-[gray]":
                                    "bg-[red]"}`}>{item.orderStatus}</span></TableCell>
                                    

                                 
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrdersTable;