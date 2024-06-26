function Header(){

    return (
        <div className='header'>
            <h1>Todo List {new Date().toDateString()}</h1>
        </div>
    );
}

export default Header;