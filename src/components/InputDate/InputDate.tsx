import React from "react";
import "./inputDate.css"

interface Props  {
    title?: React.ReactNode;
    label?: string
    onChange?: React.FormEventHandler<HTMLInputElement>;
    defaultValue?: any;
    name: string;
    id?: string
};

const DateComponent = React.forwardRef(({id, title, defaultValue, label,...props}: Props) => {
  
  return (
    <div className="question-body" id={id}>
      <h2 className="question-title">
            {title}
            </h2>
      <label className="question-label">
        {label}
      <input 
      type="date" 
      className="question-input"
      {...props} 
      />
      </label>
      
    </div>
  );
});

export default DateComponent;