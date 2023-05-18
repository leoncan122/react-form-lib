import React, {useState, useEffect, useImperativeHandle, forwardRef, useCallback } from "react";

interface DatePickerProps {
    data: any;
    fieldNameToFilterby: string;
    titleStart: string;
    titleFinish: string;
}

const DatePicker: React.FC<DatePickerProps> = forwardRef(function DatePicker({titleStart, titleFinish,fieldNameToFilterby, data}, ref) {
  const [selectedDate, setSelectedDate] = useState<{start: any; finish: any}>({
    start: '',
    finish: '',
  });
  const [selectedItems, setSelectedItems] = useState([...data]);

  useImperativeHandle(ref, () => {
    return {
      getFilteredData() {
        return selectedItems
      },
      getDates() {
        return selectedDate
      }
    };
  }, [selectedItems]);

  const handleDate = useCallback(
    (e: any) => {
      setSelectedDate(prev =>({ ...prev, [e.target.name]: e.target.value }));
    }, []
  )
    console.log(selectedItems)
    useEffect(() => {
      const selectedReports = data.filter((item: any) => {
        const start = new Date(new Date(selectedDate.start).setHours(0));
        const end = new Date(new Date(selectedDate.finish).setHours(23));
        const filterBy = new Date(item[fieldNameToFilterby]);
        return filterBy >= start && filterBy <= end;
      });
      setSelectedItems(selectedReports);

      
    }, [selectedDate.start, selectedDate.finish]);
  return (
      <div className="picker-container">
        <label className="picker-start">
          {titleStart}
          <input
            type="date"
            className="date-start-input input-picker"
            name="start"
            onChange={handleDate}
          />
        </label>
        <label className="picker-finish">
          {titleFinish}
          <input
            type="date"
            className="date-finish-input input-picker"
            name="finish"
            onChange={handleDate}
          />
        </label>
      </div>
      
  );
});

export default DatePicker
