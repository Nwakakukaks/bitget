import { NavBar } from "./navbar";
import { Alert, Box, Grid, Text, useColorMode } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function Layout() {

  const {colorMode} = useColorMode()

  return (
      <Grid minH="100vh" templateRows="auto 1fr auto" bgColor={colorMode == 'dark' ? '#050505' : '#f5f5f5'}>
        <NavBar />
        <Outlet />
        <Alert bg={colorMode == 'dark' ? '#050505' : '#f5f5f5'} variant='subtle'>
          
        </Alert>
      </Grid>
  );
}
