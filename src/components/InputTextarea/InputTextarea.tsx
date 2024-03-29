import React from 'react';
import styled from '../../modules/styled-components';

interface TextAreaProps {
  defaultValue?: string;
  onChange: React.FormEventHandler;
  name: string;
  title?: string;
  rows?: number;
  cols?: number;
}

let Textarea = styled.textarea`
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
`
const InputTextarea: React.FC<TextAreaProps> = ({ title, name, rows = 10, cols = 50, ...props }) => {
 
  return (
    <div className='question-body'>
      <h2 className='question-title'>{title}</h2>
      <label className='question-label'>
        <Textarea
          rows={rows}
          cols={cols}
          {...props}
          name={name}
        ></Textarea>
      </label>
    </div>
  );
};

export default InputTextarea;