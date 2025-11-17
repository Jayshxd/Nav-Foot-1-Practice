

const Navbar = () => {
    return (
        <nav className='hover:bg-gray-300 hover:text-emerald-900 bg-emerald-900 text-white azonix px-5 py-10 flex items-center justify-between'>
            <h2 className='text-3xl'>Re-Source</h2>
            <div className='flex items-center justify-between gap-7 text-l'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Account</h4>
            </div>

        </nav>
    )
}

export default Navbar;