import React from "react"

const Modal = ({
  handleClose,
  handleModalSubmit,
  handleOnclick,
  handleCancel,
  Title,
  Content,
  ButtonText,
  CancelButton,
  bigModal,
  loader
}) => (
  <div className="bg-overlay text-black fixed top-0 left-0 w-full h-full overflow-auto pt-[50px] z-40">
    <div className={`flex flex-col-reverse md:flex-row ${bigModal ? "max-w-5xl":"max-w-xl"} mx-auto`}>
      <div className="flex-grow bg-white md:w-1/2 border border-light_grey p-8 rounded-md mx-4">
      
        <div className="text-center">
          <div className="mb-3 text-xl md:text-4xl font-bold uppercase">{Title}</div>
          {Content}
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-5">
          {!!ButtonText && (
            <div className="w-full bg-green text-black font-bold rounded hover:bg-maroon">
              <a
                aria-label="submit"
                type="submit"
                href={handleModalSubmit}
                onClick={handleOnclick}
                disabled={loader === true}
                // className="tracking-wider font-bold border-none p-3 rounded text-center bg-vodafone_red text-vodafone_white hover:bg-maroon self-end w-full cursor-pointer"
                className={`tracking-wider font-bold border-none p-3 text-center self-end w-full cursor-pointer ${
                  loader === true ? "bg-light_grey" : "tracking-wider "
                }`}
              >
                <div className="flex justify-center">
                {loader === true ? (
                  <svg version="1.1" className="w-5 h-5" fill="#fff" x="0px" y="0px"
                  viewBox="0 0 50 50"  >
                 <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                 <animateTransform attributeType="xml"
                 attributeName="transform"
                 type="rotate"
                 from="0 25 25"
                 to="360 25 25"
                 dur="0.6s"
                 repeatCount="indefinite"/>
                 </path>
                 </svg>
                ) : null}
                {ButtonText}
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
      <div>
        <a href={() => false} onClick={handleClose}>
        <svg version="1.1" viewBox="0 0 24 24" title="Close" className="cursor-pointer ml-auto md:ml-2 w-7 h-7 "><g id="Icons+Indicators-/-System-Icons-/-close-/-#FFFFFF" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" ><g id="close"><polygon id="bg" points="0 0 24 0 24 24 0 24"></polygon><path d="M20,4 L4,20" id="Shape" stroke="#FFFFFF" stroke-linecap="round" ></path><path d="M4,4 L20,20" id="Shape" stroke="#FFFFFF" stroke-linecap="round" ></path></g></g></svg>
        </a>
      </div>
    </div>
  </div>
)

export default Modal
