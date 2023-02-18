import React from "react";
import {Box} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar(){

    return( 
        <Box width="100%" display="flex" backgroundColor="blue" justifyContent="space-evenly" height="70" color="white" padding="2%">
            <Link to="/">Product Page</Link>
            <Link to="/cart">Cart Page</Link>
            <Link to="/orders">Orders Page</Link>
        </Box>
    )
}