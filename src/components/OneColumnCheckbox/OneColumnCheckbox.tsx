import React, { useState, useEffect } from "react";
import "./inputDate.css"
import "../../../public/global.css"

interface Props {
    children?: React.ReactNode;
    onChange?: React.FormEventHandler<HTMLInputElement>;
    surveyForm: any;
    setSurveyForm: any;
    name: string;
    options?: any[];
};

const OneColumnCheckbox = React.forwardRef(({ children, surveyForm, setSurveyForm, options, ...props }: Props) => {
    const [data, setData] = useState([...surveyForm[props.name]])

    const handleEventData = (value: any) => {
        const isValueOnData = data?.includes(value)

        const filteredData = data.filter(oldValues => oldValues != value)

        isValueOnData ?
            setData(filteredData) :
            setData((previous) => ([
                ...previous, value
            ]))

    }

    useEffect(() => {
        setSurveyForm((prev: any) => ({ ...prev, [props.name]: data }))

    }, [data])


    return (
        <div className="question-body">
            <h2 className="">
                {children}
            </h2>
            {options?.map((option, index) => (
                <div className="">
                    <label className="" key={index}>
                        <input
                            type="checkbox"
                            className=""
                            value={option.value}
                            {...props}
                            defaultChecked={surveyForm[props.name]?.includes(option.value) ? true : false}
                        />
                    </label>
                    {option?.value}
                    {option?.value === 'Other' && (
                        <label className="" key={index}>
                            <input
                                type="text"
                                {...props}
                                name={`${name}Other`}
                                value={option.value}
                                onChange={handleEventData}
                                defaultValue={surveyForm[props.name] + 'Other'}
                            />
                        </label>
                    )}


                </div>
            )

            )}

        </div>
    );
});


export default OneColumnCheckbox;