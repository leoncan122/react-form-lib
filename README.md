# Platformable Code Library

Is a Python React based library for dealing with repetitive code snippets.
We found common patterns in our forms and other pages, so improve try to improve the workflow and maintenance implementing this library

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-form-lib.

```bash
npm install react-form-lib
```

## Usage

```javascript
import {
  Sticky
  InputDate,
  RadioList,
  InputTextarea,
  InputNumber,
  InputCheckboxColumns,
  Button,
  useImageToClipboard,
  Rating,
} from "@leoncan122/react-form-lib";


# returns a wrapper component fixed to screen when you scroll.

        <Sticky
          onClick={(e) => console.log("click", e)}
          ref={ref}
          hideWhen="test"
          topOffset={"20px"}
          id="sticky-custom"
        >
            <button role="button" className="btn btn-primary">
              STICKED BUTTON
            </button>

        </Sticky>

# returns a component that provide the same length of buttons as options provided

        <Rating
          options={healthMinistryActiveOptions}
          onClick={(e) =>
            setSurveyForm({ ...surveyForm, [e.target.name]: e.target.value })
          }
          name="providerLevels"
          surveyForm={surveyForm}
          title='How is the level of your providers'
        />

# returns a component that provide the same length of checkbox as options provided

        <InputCheckboxColumns
          name="fboAttendees"
          options={fboAttendeesOptions}
          surveyForm={surveyForm}
          setSurveyForm={setSurveyForm}
          title={"Meeting attendees"}
          columns={2}
        />

# returns a component that provide the same length of buttons as options provided

      <RadioList
        options={["Option 1", "Option 2", "Other"]}
        name="radioOptions"
        title="Radios"
        columns={2}
        selectedValue={"Other"}
        onChange={handleSingleValueForm}
      />

# return a textarea component

      <InputTextarea
        id="test"
        title="Test"
        name="suggestions"
        onChange={handleSingleValueForm}
      />


# return a component to pick between to dates, 
# and filter the items from the data included in the range selected

      <DatePicker
        fieldNameToFilterby={"date"}
        ref={pickerRef}
        data={[
          { date: "2023/01/16", name: "Leon" },
          { date: "2023/01/17", name: "Leon" },
          { date: "2023/01/18", name: "Leon" },
          { date: "2023/01/19", name: "Leon" },
          { date: "2023/01/20", name: "Leon" },
          { date: "2023/01/21", name: "Leon" },
          { date: "2023/01/22", name: "Leon" },
        ]}
      />
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)