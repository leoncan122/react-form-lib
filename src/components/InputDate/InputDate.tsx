import React from "react";
import "./inputDate.css"

interface Props  {
    children?: React.ReactNode;
    onChange?: React.FormEventHandler<HTMLInputElement>;
    surveyForm?: any;
    name: string;
};

const DateComponent = React.forwardRef(({children, surveyForm, ...props}: Props) => {
  
  return (
    <div className="date-input-containter">
      <label>
            <h2 className="font-black">
            {children}
            </h2>
      </label>
      <input 
      type="date" 
      {...props} 
      defaultValue={surveyForm[props.name].split('T')[0]}
      />
    </div>
  );
});

export default DateComponent;