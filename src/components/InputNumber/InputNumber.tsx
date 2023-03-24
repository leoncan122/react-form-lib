import React from 'react';
import "../../../public/global.css"

interface RadioProps {
    title?: string;
    name: string;
    options: string[];
    onChange:  (e: React.FormEventHandler<HTMLInputElement>) => void;
    selectedValue?: string;
    columns?: number;
}

const InputNumber: React.FC<RadioProps> = ({ title, onChange, selectedValue, ...props }) => {
    const isNumberKey = (e: any) => {
        const invalidChars = [
          "-",
          "+",
          "e",
        ];
        if (invalidChars.includes(e.key)) {
          e.preventDefault();
        } 
    }
    
    
      return (
        <div className="px-7 mt-10 ">
          <h2 className="font-black">
          {title}
          </h2>
          <p>Please enter the total number only</p>
          <label className='flex mt-7 gap-5'>
          <input
            type="number"
            // onWheelCapture={(e:  Event) => {
            //     const filterValue = (e.target as HTMLInputElement).blur;
            //     filterValue()}}
            // onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) => {
            //     let value = Number((e.target as HTMLInputElement).value);
            //   value > 300 && (value = 300) 
            // }}
            // maxLength={3}
            defaultValue={selectedValue || 0 }
            className="p-4 border-black rounded w-20"
            {...props}
            onKeyDown={isNumberKey}
          />
        </label>
        </div>
      )
};

export default InputNumber;