import './Layout.scss';
import { Route } from "react-router-dom";
import { Grid, Tabs, Tab, Paper, Button, Drawer ,List} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ListView from '../adList/ListView';
import NewItemCreation from '../newItemCreation/NewItemCreation';

const Layout = () => {
    const [ tabValue, setTabValue ] = useState(0);
    const [ isNewDrawer, setIsNewDrawer ] = useState(false);

    return(
        <Grid data-testid="layout">
            {/* New advertisement adding block */}
            <Drawer 
                anchor="right" 
                open={isNewDrawer} 
                // onClose={() => { setIsNewDrawer(false) }}
                >
                <NewItemCreation
                    closeAction={ () => { setIsNewDrawer(false) } }
                />
            </Drawer>

            {/* Header */}
            <Paper className="headerBlock">
                <Grid container display="flex" justifyContent="space-between" alignItems="center">
                    <Grid className="appTitle">Classified Ads</Grid>
                    <Tabs
                        value={ tabValue }
                        indicatorColor="primary"
                        // textColor="primary"
                        onChange={ (e, currentTab) => { setTabValue(currentTab); }}
                    >
                        <Tab label="Home" />
                        <Tab label="Favourites" />
                    </Tabs>
                </Grid>
            </Paper>
            <Grid className="innerPage">
                {/* all the advertisement list */}
                {
                    <ListView
                        currentPageId={ tabValue }
                        newBtnAction={ () => { setIsNewDrawer(true) } }
                    />
                }
            </Grid>
        </Grid>

    );
}
export default Layout;