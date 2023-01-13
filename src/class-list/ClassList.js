import React from 'react';
import { ClassCard } from '../class-card/ClassCard';

export const ClassList = (props) => {

  return (
    <div className='class-list'>
        {props.list.map(item => (
            <ClassCard key={item.id} cardDetail={item} />
        ))}
    </div>
  )
}
