import { useState } from "react";
import ImageUpload from "./componetnts/ImageUpload"

import ProfileCard from "./componetnts/ProfileCard"
import InputField from "./componetnts/InputField";

const App:React.FC = () => {
  const [name,setName] = useState('');
  const [birth,setBirth] = useState('');
  const [phone,setPhone] = useState('');
  const [image,setImage] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row justyfy-center item-start p-8 gap-8">
   {/*　左側:プロフィール画面 */}
   <ProfileCard name={name} birth={birth} phone={phone} imageUrl={image} />

   {/*右側:フォーム入力 */}
   <div className="bg-white p-6 rounded-xl shadow-md w-80">
    <InputField label="名前" value={name} onChange={(e)=> setName(e.target.value)} />
    <InputField 
    label="お誕生日"
    type="date"
    value={birth}
    onChange={(e)=> setBirth(e.target.value)}
    />

<InputField 
    label="電話番号"
    type="tell"
    value={phone}
    onChange={(e)=> setPhone(e.target.value)}
    />
    
    <ImageUpload onImageUpload={(base64)=>setImage(base64)}/>

              {/* DownloadButton は後で追加 */}
        {/* <DownloadButton /> */}


   </div>
    </div>
  )
}

export default App
