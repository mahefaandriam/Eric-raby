
import Footer from "../components/Footer"

const ThankYou = () => {
  return (
    <div>
      <div className="w-full absolute top-0">
        <div className=" relative flex flex-col justify-center items-center pt-30 h-auto bg-white">
          <h1 className="text-2xl font-extralight">By </h1>
          <h1 className="text-4xl text-accent ">Eric Raby</h1>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        
        <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
        <p className="mb-6">Click below to download your book:</p>
    
        <a
          href="/api/download"
          className="hover:bg-accent animate-bounce outline-1 bg-white outline-accent text-accent hover:text-white px-4 py-2 "
          download
        >
          Download Book
        </a>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer/>
      </div>
    </div>
  )
}
export default ThankYou