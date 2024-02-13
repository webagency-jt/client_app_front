const Header = () => {
    return (
        <header className="bg-white p-8 border-b-2 border-b-main-color">
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="px-3 py-1 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
        </header>
    );
};

export default Header;