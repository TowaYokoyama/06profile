
interface ImageUploadProps {
    onImageUpload: (base64Image: string) => void;
}

const ImageUpload:React.FC<ImageUploadProps> = ({ onImageUpload }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            onImageUpload(base64);
        };
        reader.readAsDataURL(file); 
    };
    return(
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">プロフィール画像</label>
            <input 
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            title="ここに画像をアップロードしてください"
            className="w-full text-sm"
            />
        </div>
    );
};
export default ImageUpload;