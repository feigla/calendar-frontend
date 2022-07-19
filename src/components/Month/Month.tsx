import React, {FC} from 'react';
import dayjs from "dayjs";
import Week from "../Week/Week";

interface monthProps {
    currentMonth: (dayjs.Dayjs | undefined)[][]
}

const Month: FC<monthProps> = ({currentMonth}) => {
    return (
        <>
            {currentMonth.map((row, index) =>
                <React.Fragment key={index}>
                    <Week row={row}/>
                </React.Fragment>
            )}
        </>
    );
};

export default Month;