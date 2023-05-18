import React from 'react'
import './Rating.css'

export interface Option{
    text: string;
    value: any
    bgColor: string;
    bgColorHover: string
}
export interface RatingProps {
    title: string;
    surveyForm: any;
    name: string; 
    options: Option[];
    onClick: React.FormEventHandler<HTMLButtonElement>;
}
const Rating: React.FC<RatingProps> = ({ surveyForm, name, options, title, onClick}) => {
  
  return (
    <>
    <div className="question-body">
    <h2 className="question-title">{title}</h2>
    <div className="rating-options-container" style={{gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`}}>
      
      {options.map((option,index)=>{
        return (
        <button  name={name} value={option.value} className={`${surveyForm?.[name] === option.value ? option.bgColor : null} border-black py-4 rounded shadow-lg ${option.bgColorHover}`} 
        onClick={onClick}>
        {option.text}
        </button>)
      })}

    </div>
  </div>
    </>
);
}

export default Rating;