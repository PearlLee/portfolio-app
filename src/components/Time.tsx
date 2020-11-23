import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ko';

interface ITimeProps {
  dateToFormat: string;
}

function Time(props: ITimeProps) {
  return (
    <Moment local fromNow titleFormat="YYYY-MM-DD" withTitle>
      {props.dateToFormat}
    </Moment>
  );
}

export default Time;
