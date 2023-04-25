import Link from 'next/link'

export default function Navbar() {
    const menus = [
        {title: 'Home', url:'/', id:1},
        {title: 'About', url:'/about', id:2},
        {title: 'Product', url:'/product', id:3},
        {title: 'Users', url:'/users', id:4},
    ]
    return (
        <>
            <div className="w-full bg-white">
                <div className="flex">
                    {menus.map((menu) => (
                        <Link key={menu.id} className="p-2" href={menu.url}>{menu.title}</Link>
                    ))}
                </div>
            </div>
        </>    
    )
}

