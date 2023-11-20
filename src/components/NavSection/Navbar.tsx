import Logo from '../../assets/images/ttt-logo.png'

const Navbar: React.FC = () => {
  return (
    <div>
      <div className='bg-[#111111] px-10 py-5'>
        <div className='flex items-center text-white justify-between'>
          <div>
            <div className='flex items-center'>
              <div className='pr-3 border-r-[1.5px] border-[#fec03f]'>
                <img src={Logo} alt="Logo" className='h-10'/>
              </div>
              <div className='pl-3'>
                <h1 className='font-medium tracking-[0.2em]'>STORIES</h1>
              </div>
            </div>
          </div>
          <div>
            <div>
              <button className='px-3 py-2 bg-[#fec03f] text-black rounded-lg font-semibold tracking-tight'>Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar