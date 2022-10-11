import {AppBar,FormControlLabel,List,ListItem,Switch,Toolbar,Typography} from '@mui/material';
 
interface Props{
    darkMode:boolean;
    handleThemeChange:()=>void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about'  , path: '/about'},
    {title: 'contact' ,path: '/contact'}
]
const RighLinks=[
    {title:'login',path:'/login'},
    {title:'register',path:'/register'}
]

export default function Header({darkMode,handleThemeChange}:Props){
    return(
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
            
                <Typography variant='h6'>
                    Re-store
                </Typography>
                <Switch onChange={handleThemeChange} checked={darkMode}></Switch>
                <List>
                    {midLinks.map(({title,path})=>
                    <ListItem>   
                        {title.toUpperCase()}
                    </ListItem>
                    )}
                </List>
            </Toolbar>
        </AppBar>
    )

}