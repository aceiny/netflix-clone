import React from "react";
import Select from "react-select";
function Selectoptions() {
    const options = [
        { value: 'english', label: 'English' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'france', label: 'France' }
      ];
    return (
      <Select
        options={options}
        menuPlacement="top"
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: '#f3f3f3',
            border: '1px solid #333333',
            boxShadow: 'none',
            cursor: 'pointer',
            width : "134px",
            height : "15px"

          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#333333',
            backgroundColor : "#f3f3f3",
            width : "134px",
            height : "32px"
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            display : "none"
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: '#f3f3f3'
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: "#f3f3f3",
            color: state.isSelected ? '#ffffff' : '#f3f3f3',
            cursor: 'pointer',
            width : "134px",
            height : "32px"
          })
        }}
      />
    );
  }
const Signupfooter = () =>  {
    return(
        <>
        <div className="bg-[#f3f3f3] w-full py-[30px] flex-shrink-0">
        <div className="px-[10%] text-[#737373] text-[13px] flex flex-col gap-7">
            <div>
                <h1 className=" text-[16px]">Questions</h1>
            </div>
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-3">
                    <p>FAQ</p>
                    <p>Cookie Preferences</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                    <Selectoptions/>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Help center</p>
                    <p>Jobs</p>
                    <p>Corkie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Media Center</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
        </div> 
        </>
    )
}
export default Signupfooter