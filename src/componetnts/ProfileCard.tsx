//画面の左側
interface ProfileCardProps{
    name:string;
    birth:string;
    phone: string;
    imageUrl?: string; // base64 または URL（未設定OK）
}

const ProfileCard:React.FC<ProfileCardProps> = ({name,birth,phone,imageUrl}) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 text-center w-80">
            {imageUrl ? (
                <img
                src={imageUrl}
                alt="プロフィール画像"
                className="w-24 h-24 rounded-full object-cover bg-gray-300 mx-auto mb-4"/>
            ):( 
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4" />
            )}
                <h2 className="text-xl font-bold mb-2">{name || '名前未設定'}</h2>
                <p className="text-gray-700">お誕生日: {birth || '未設定'}</p>
                <p className="text-gray-700">電話番号: {phone || '未設定'}</p>
            
        </div>
    );

};
export default ProfileCard;