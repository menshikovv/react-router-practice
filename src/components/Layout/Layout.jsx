import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

function Layout() {
    return ( 
        <>
            <header>
                <h1>CHOOSE YOUR JOB VACANCY</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;