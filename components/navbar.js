import { logoutAction } from '@/store/auth/auth.action'
import { setThemeMode } from '@/store/settings/setting.action'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
    const menus = [
        {title: 'Home', url:'/', id:1},
        {title: 'About', url:'/about', id:2},
        {title: 'Product', url:'/product', id:3},
        {title: 'Users', url:'/users', id:4},
    ]
    const dispatch = useDispatch()
    const settings = useSelector(state => state.setting)
    const auth = useSelector(state => state.auth)
    const {darkMode} = settings
    const { authUser, isLogin } = auth;
    const modeChange = () =>{
        const newThemeMode = darkMode ? false : true;
        localStorage.setItem('themeMode', newThemeMode)
        dispatch(setThemeMode(newThemeMode)) 
    }
    const isLoaded = () => {
        const themMode = localStorage.getItem('themeMode') == 'true' ? true : false;
        dispatch(setThemeMode(themMode)) 
    }

    const logoutUser = () => {
        dispatch(logoutAction());
    }
    useEffect(() => {
        isLoaded()
    }, [] ) 
    useEffect(() => {
        console.log('darkmode', darkMode);
    }, [darkMode])
    return (
        <>
            <div className="w-full bg-white dark:bg-gray-950 dark:shadow-xl border dark:border-slate-700 fixed">
                <div class="flex justify-between py-2">
                <div className="flex">
                        {menus.map((menu) => (
                            <Link key={menu.id} className="p-2 text-black dark:text-white" href={menu.url}>{menu.title}</Link>
                        ))}
                    </div>
                    <div className='flex'>
                        {isLogin 
                            ?<>
                                <div className="p-2 text-black dark:text-white cursor-pointer" onClick={logoutUser}>Logout</div>
                            </>
                            :<>
                                <Link className="p-2 text-black dark:text-white" href="/login">Login</Link>
                            </>
                        }
                        
                        <button type="button" class="bg-white dark:bg-gray-700 dark:border-gray-500 text-blue-500 dark:text-white hover:bg-gray-300 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2" onClick={modeChange}>
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                    
                </div>
                    
            </div>
        </>    
    )
}

