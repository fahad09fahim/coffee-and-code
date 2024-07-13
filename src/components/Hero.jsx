import Navbar from "./Navbar";


const Hero = () => {
   

            const bgImg = {
              backgroundImage: `url("https://i.postimg.cc/Dw3KNXm0/bg.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100vw",
            };
            return (
              <div
                className="relative place-items-center grid grid-cols-1 md:grid-cols-2 bg-[#ECB176] h-[500px] md:h-[750px]"
                style={bgImg}
              >
                  {/* navBar */}
                  <Navbar/>
                <div className=" relative ">
                  {/* for left side text */}
                  <div className="relative z-10  text-white">
                    <h1 className="text-3xl font-bold md:text-6xl mb-1 md:mb-3">
                      Experience <span className="text-[#1d1c1c]">The</span> 
                    </h1>
                    <h1 className="text-base md:text-xl font-bold">
                      {" "}
                      Rich Flavor of Authentic <span className="text-black">Espresso</span>
                    </h1>
                  </div>
                  {/* <div className="absolute opacity-90 rounded-lg -top-5 -left-3 w-[270px] md:w-[350px] h-[100px] md:h-[125px] bg-amber-300"></div> */}
                </div>
                <div className="relative">
                  {/* for image */}
                  <img
                    src="https://i.postimg.cc/yNdMQKsv/ciiffee-removebg-preview.png"
                    alt="coffee"
                    className="z-10 relative img-shadow"
                  />
                  <div className="absolute top-20 md:top-24 left-[60px] md:left-[70px]">
                    <h1 className="text-[30px] md:text-[50px] scale-150 font-bold text-slate-100 leading-none">
                      Coffee <br />& <br /> Code
                    </h1>
                  </div>
                </div>
              </div>
            );
          };
          
         
          



export default Hero;