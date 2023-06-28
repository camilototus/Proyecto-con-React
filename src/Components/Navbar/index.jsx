import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
               <li className="font-semibold text-lg">
                    <NavLink 
                        to= '/'>
                        Shopi
                    </NavLink>
                </li> 
               <li>
                    <NavLink 
                    to= '/'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/furniture'
                    onClick={() => context.setSearchByCategory('furniture')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        furniture
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/toys'
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li> 
            </ul>
            <ul className="flex items-center gap-3">
               <li className="text-black/60">
                    camilototus180@gmail.com
                </li> 
               <li>
                    <NavLink to= '/my-order'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Order
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/my-orders' 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/my-account'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li> 
               <li>
                    <NavLink to= '/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink>
                </li> 
               <li className='flex items-center'>
               <ShoppingCartIcon className="h-6 w-6 text-black-500" />
               <div>
               {context.cartProducts.length}
               </div>
                </li>                 
            </ul>
        </ nav>
    )
}

export default Navbar