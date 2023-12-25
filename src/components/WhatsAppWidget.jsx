import { WhatsApp } from "@mui/icons-material";

const WhatsAppWidget = () => {
  const sendMessage = () => {
    const message =
      "Hey MentorHeal!, I would like to know more about how it can benefit me!";
    const number = +918130744243;
    const url = `https://web.whatsapp.com/send?phone=${number}&text=${message}&app_absent=0`;
    window.open(url);
  };

  return (
    <div className="flex justify-end mx-8">
      <div className="fixed z-50 bottom-10">
        <WhatsApp
          fontSize="large"
          onClick={sendMessage}
          className="w-12 h-12 cursor-pointer bg-white text-[#25d366] rounded-t-full rounded-br-full"
          alt=""
        />
      </div>
    </div> 
  );
};

export default WhatsAppWidget;
