import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, CardHeader } from "@mui/material";
import { deleteCustomer, getAllCustomers } from "../../State/Admin/Customer/Action";

const CustomersTable = () => {
    const dispatch = useDispatch();
    const { customers, loading, error } = useSelector((store) => store.adminCustomer);  // ✅ Corrected

    useEffect(() => {
        dispatch(getAllCustomers()); // Fetch customers on component mount
    }, [customers.deleteCustomer]); 

    const handlecustomerDelete=(customertId)=>{
        dispatch(deleteCustomer(customertId))
    }

    return (
        <div className="p-5">
            <Card className="mt-2">
                <CardHeader title="All Customers" />

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p style={{ color: "red" }}>Error: {error}</p>
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customers table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Avatar</TableCell>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Mobile</TableCell>
                                    <TableCell align="left">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.length > 0 ? (
                                    customers.map((customer) => (
                                        <TableRow key={customer?.id}>
                                            <TableCell>
                                                <Avatar>{customer?.firstName?.charAt(0)}</Avatar>
                                            </TableCell>
                                            <TableCell align="left">{customer?.firstName || "N/A"}</TableCell>
                                            <TableCell align="left">{customer?.lastName || "N/A"}</TableCell>
                                            <TableCell align="left">{customer?.email}</TableCell>
                                            <TableCell align="left">{customer?.mobile || "N/A"}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={()=>handlecustomerDelete(customer.id)} variant="outlined" color="error">
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            No customers found
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Card>
        </div>
    );
};

export default CustomersTable;
