import React from 'react';
import "../../../public/global.css"

interface RadioProps {
    id: string;
    title?: string;
    name: string;
    options: string[];
    onChange:  (e: React.FormEventHandler<HTMLInputElement>) => void;
    selectedValue?: string;
    columns?: number;
    maxLimit: number;
}

const InputNumber: React.FC<RadioProps> = ({ id,title, onChange, selectedValue,maxLimit, ...props }) => {
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
        <div className="question-body" id={id}>
          <h2 className="question-title">
          {title}
          </h2>
          <p>Please enter the total number only</p>
          <label className='question-label'>
          <input
            type=""
            onWheelCapture={(e:  any) => e.blur}
            // onKeyUp={(e: any) => {
            //     let value = Number((e.target as HTMLInputElement).value);
            //   value > 300 && (value = 300) 
            // }}
            {...maxLimit && ((e: any) => {
              const {value} = e.target
              let finalValue;
              value > maxLimit ? (finalValue = maxLimit) : (finalValue = value);
              return Number(finalValue)
            })
            }
            // maxLength={3}
            defaultValue={selectedValue || 0 }
            className="question-input"
            {...props}
            onKeyDown={isNumberKey}
          />
        </label>
        </div>
      )
};

export default InputNumber;