// import React from 'react'

// const AgentSettingsProfile = () => {
//   return (
//     <div className='bg-white min-h-[300px] mb-10 rounded-[10px] p-5 shadow-shadow mt-2'>

//       </div>
//   )
// }

// export default AgentSettingsProfile

import React from 'react'
import personIcon from "../../assets/Group.svg"
import security from '../../assets/security.svg'
import conditions from '../../assets/conditions.svg'
import notification from '../../assets/Group 207.svg'



interface Iprops{
    text: string
    icon:any
}
export const InfoCard:React.FC<Iprops>= ({text,icon}) => {
    return (
      <div className="flex w-[95%] h-[50px] rounded-md mt-[10px]  items-center gap-2 bg-gray-300 cursor-pointer ">
        <div className="w-[30px] h-[30px] rounded-full bg-bgIcon flex justify-center items-center ml-[10px]">
          <img className="text-black" src={icon} alt="" />
        </div>
        <p className="text-gray-800 font-poppins text-10 font-semibold">
          {text}
        </p>
      </div>
    );
}
const AgentSettingsProfile = () => {
  return (
    <div className='bg-[red] min-h-[300px] mb-10 rounded-[10px] p-5 m-8 shadow-shadow mt-2 flex'>
      {/* <div className="h-[550px] w-[658px] rounded-lg shadow-md mt-5 flex gap-5"> */}
        <div
          className=" h-[100%] w-72 mr-4 flex flex-col items-center gap-3   border-gray-300"
        >
          <InfoCard text="Personal Information" icon={personIcon} />
          <InfoCard icon={security} text="Security" />
          <InfoCard icon={notification} text="Notifications" />
          <InfoCard icon={conditions} text="Terms and conditions" />
        </div>
        <div className='border-l pl-5 '>
          <h1 className="text-black font-bold mb-6 text-[20px] ">
            Update personal Information
          </h1>
         
          <form action="">
            <div className='flex flex-col'>
            <label htmlFor="FullName"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Full Name
            </label>

            <input type="text" id="FullName"
              className=" rounded-[8px] h-[45px] bg-gray-300 mb-3 " />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="Email"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Email
            </label>

            <input type="text" id="FullName"
              className=" rounded-[8px] h-[45px] bg-gray-300 mb-3 " />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="Phone Number (Optional)"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Phone Number (Optional)
            </label>

            <input type="text" id="FullName"
              className=" rounded-[8px] h-[45px] bg-gray-300 mb-3 " />
            </div>

            
            
            
            
            <h1 className="text-black mt-[20px] font-poppins text-15 font-semibold">
              Personal Address
            </h1>
            <br />

            <div className=" flex gap-[50px]">
              <div>
                {" "}
                <label
                  htmlFor="country"
                  className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
                >
                  Country or region
                </label>
                <br />
                <input
                  type="text"
                  id="country"
                  className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
                />
              </div>
              <div>
                {" "}
                <label
                  htmlFor="city"
                  className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
                >
                  City
                </label>
                <br />
                <input
                  type="text"
                  id="city"
                  className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
                />
              </div>
            </div>
            <br />
            <div className=" flex gap-[50px]">
              <div>
                {" "}
                <label
                  htmlFor="Adress"
                  className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
                >
                  Address
                </label>
                <br />
                <input
                  type="text"
                  id="Adress"
                  className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
                />
              </div>

              <div>
                {" "}
                <label
                  htmlFor="Postal Code"
                  className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
                >
                  Postal Code
                </label>
                <br />
                <input
                  type="text"
                  id="Postal Code"
                  className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-[125px] h-[46PX] bg-[green] rounded-[10px] mt-[10px]">
                Save Profile
              </button>
            </div>
          </form>
        {/* </div> */}
      </div>

      <div></div>
    </div>
  );
}

export default AgentSettingsProfile