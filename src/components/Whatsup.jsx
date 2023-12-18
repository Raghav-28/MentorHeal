import icon from "../assets/whatsapp.png";
export default function Whatsup() {
  const sendMessage = () => {
    const message = "Hey MenthorHeal";
    const number = 8130744243;
    const url = `https://web.whatsapp.com/send?phone=${number}&text=${message}&app_absent=0`;
    window.open(url);
  };

  return (
    <>
      <div className="flex justify-end mx-8 ">
        <div className="fixed z-50 bottom-10">
          <img src={icon} onClick={sendMessage} className="w-12 h-12 cursor-pointer" alt="" />
        </div>
      </div>
    </>
  );
}
