import logo from '../../../public/logoHeader.png'
function Header() {
    return (
      <div className="bg-black" >
        <div className="container mx-auto flex justify-center">
       <img src={logo} alt='logo uol' className='h-12'/>
        </div>
      </div>
    );
  }
    
    export default Header;