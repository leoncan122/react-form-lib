import React from "react";
import "./InputCheckboxColumns.css"
import "../../../public/global.css"

interface CheckboxProps {
    title?: React.ReactNode;
    onChange?: React.FormEventHandler<HTMLInputElement>;
    surveyForm: any;
    setSurveyForm: any;
    name: string;
    options?: any[];
    columns: number;
};

const InputCheckboxColumns: React.FC<CheckboxProps> = ({ title, surveyForm, setSurveyForm, options, columns = 1, ...props }) => {
    let data = [...surveyForm[props.name]];

    const sortedOptions: any = options?.sort();
    const columnLength = Math.ceil(sortedOptions.length / columns);

    const handleEventData = (e: any) => {
        const { value } = e.target;
        const isValueOnData = data?.includes(value)

        const filteredData = data?.filter((oldValues: any) => oldValues != value)

        isValueOnData ?
            data = filteredData :
            data = [
                ...data, value
            ];

        setSurveyForm((prev: any) => ({ ...prev, [props.name]: data }))
            
    }




    return (
        <div className="question-body">
            <h2 className="question-title">
                {title}
            </h2>
            {Array.from({ length: columns }, (_, i) => (
                <div key={i} style={{ flex: 1 }} className="question-checkbox-container">
                    {sortedOptions.slice(i * columnLength, (i + 1) * columnLength).map((option: string, index: number) => (
                    <label key={(i + 1) * index} className="question-label">
                        <input
                            type="checkbox"
                            className="question-input"
                            value={option}
                            {...props}
                            onChange={handleEventData}
                            defaultChecked={surveyForm[props.name]?.includes(option) ? true : false}
                        />
                        {option}
                        {option === 'Other' && (
                        <label className="question-other-label">
                            <input
                                className="question-other-input"
                                type="text"
                                {...props}
                                name={`${props.name}Other`}
                                value={option}
                                onChange={handleEventData}
                                defaultValue={surveyForm[`${props.name}Other`]}
                            />
                        </label>
                    )}
                    </label>
                    ))}
                </div>
            )

            )}

        </div>
    );
};


export default InputCheckboxColumns;