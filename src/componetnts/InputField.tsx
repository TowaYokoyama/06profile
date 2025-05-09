//ラベル+入力欄のコンポ―ネント
interface InputFieldProps {
    label:string;
    value:string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    type ?:string ;
    placeholder ?:string;
}

const InputField:React.FC<InputFieldProps> = ({label,value,onChange,type="text",placeholder=''}) => {
    return(
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">{label} </label>
                <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                /> 
        </div>
    );
};
export default InputField;