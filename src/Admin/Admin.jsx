
import { ListItem,Box,ListItemIcon,ListItemButton,List, Toolbar, useMediaQuery, useTheme, CssBaseline, Drawer, ListItemText } from "@mui/material";
import React,{ useState }from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
//import EmailIcon from '@mui/icons-material/Email';
//import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import AdminDashboard from "./components/Dashboard";

const menu=[
    {name:"Dashboard" ,path:"/admin",icon:<DashboardIcon/>},
    {name:"Products" ,path:"/admin/products",icon:<InventoryIcon/>},
    {name:"Customers" ,path:"/admin/customers",icon:<PersonSearchIcon/>},
    {name:"Orders" ,path:"/admin/orders",icon:<SummarizeIcon/>},
    {name:"AddProduct" ,path:"/admin/product/create",icon:<LibraryAddIcon/>}
]

const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box 
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            //border:"1px solid blue",
            height:"100%"
        }}>
              <>
              {/* {isLargeScreen && <Toolbar/>} */}
              <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                      <ListItemButton>
                        <ListItemIcon>
                             {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>)}
              </List>
              </>

              <List>
                <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                             <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
              </List>

        </Box>
    )

    return(
        

            <div className='relative flex h-[100vh] ' >

                <CssBaseline/>

                <div
                 className="shadow-lg shadow-gray-700 w-[15%] border border-r-gray-300 h-full fixed top-0"
                >
                  {drawer}
                </div>

                <div className="w-[85%] h-full ml-[15%]">
                    <Routes>

                       <Route path="/" element={<AdminDashboard/>}></Route>
                       <Route path="/product/create" element={<CreateProductForm/>}></Route>
                       <Route path="/products" element={<ProductsTable/>}></Route>
                       <Route path="/orders" element={<OrdersTable/>}></Route>
                       <Route path="/customers" element={<CustomersTable/>}></Route>

                    </Routes>
                </div>

            </div>
        
    )
}

export default Admin