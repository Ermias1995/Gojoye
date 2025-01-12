import blog from '../assets/blog.jpeg';
import PropertyList from '../components/PropertyList.jsx';
function Blog() {
  return (
    <div className='mt-8'>
        <div className="flex flex-col items-center h-[720px] w-full relative">
        <img src={blog} alt="Blog banner image" className='object-cover w-full h-full'/>
        <div className="flex flex-col items-center justify-center w-11/12 md:w-96 absolute top-1/3 md:left-10 bg-white bg-opacity-70 p-5 rounded-lg">
          <h1 className='font-semibold text-2xl'><span className='block text-primary text-3xl'>Explore, Rent, Own</span> Your Future Awaits!</h1>
          <p>Whether you're searching for the ideal rental or ready to buy your dream home, we’ve got you covered. 
            Renters can browse a wide selection of properties designed to fit every lifestyle, 
            while homeowners can seamlessly list their spaces and connect with eager tenants.
          </p>
        </div>
      </div>
      <PropertyList/>
    </div>
  )
}
export default Blog