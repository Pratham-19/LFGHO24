import { ConnectKitButton } from "connectkit";
import Transfer from "./Transfer";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";

const Modal = ({
  open,
  setOpen,
  amount,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amount: string;
}) => {
  const { isConnected, address } = useAccount();

  const [state, setState] = useState<
    "connect" | "transfer" | "success" | "error"
  >("connect");

  const getModalContent = (modalType: string) => {
    switch (modalType) {
      case "connect":
        return {
          title: "Connect to a wallet",
          body: (
            <>
              <div className="flex justify-center">
                <ConnectKitButton
                  showAvatar
                  showBalance
                  customTheme={{
                    "--ck-connectbutton-background": "#F6F7F9",
                    "--ck-connectbutton-color": "#000000",
                    "--ck-connectbutton-hover-background": "#F6F7F9",
                  }}
                />
              </div>
            </>
          ),
        };

      case "transfer":
        return {
          title: "",
          body: (
            <Transfer
              to={"0x9d8c061125e2c416F472feC3A18C3fD48E88bA18"}
              from={address}
              amount={amount}
              setState={setState}
            />
          ),
        };

      case "loading":
        return {
          title: "Transfering GHO",
          body: <div>Loading....</div>,
        };
      case "success":
        return {
          title: "Success!",
          body: <div>Succesfully transfered GHO</div>,
        };
      case "error":
        return {
          title: "Failed",
          body: <div>Something went wrong, Try Again!</div>,
        };
    }
  };

  useEffect(() => {
    if (isConnected) {
      setState("transfer");
    }
  }, [isConnected]);

  return (
    <div
      className={`z-50 flex flex-col absolute  w-screen h-screen  bg-[#190D39] modalBG ${open ? "" : "hidden"} backdrop-blur-sm flex justify-center items-center`}
    >
      <Image
        src="/logo.svg"
        alt="lfgho"
        className="absolute top-0 py-20"
        width={300}
        height={300}
      />
      <Image
        src="/gho-logo.svg"
        alt="GHO"
        className="absolute inset-x-[65%] rotate-180 opacity-20"
        width={300}
        height={300}
      />
      <Image
        src="/modalBG.png"
        alt=""
        className="absolute"
        width={1000}
        height={1000}
      />
      <div className="z-[70] md:w-[18%] w-[25%] min-h-[20%] bg-white border-[0.1px] border-[#ffffff38]  bg-opacity-10 backdrop-blur-md drop-shadow-lg relative rounded-xl  ">
        <button
          className="absolute top-2 right-4"
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </button>
        <div className="flex flex-col justify-center w-full items-center mt-4">
          <h1 className="text-2xl font-semibold">
            {getModalContent(state)!.title}
          </h1>
          <div className="my-8 w-full">{getModalContent(state)!.body}</div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Modal;
