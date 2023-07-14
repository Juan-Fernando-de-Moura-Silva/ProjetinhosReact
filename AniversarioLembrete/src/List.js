import React from 'react';

const List = ({pessoas}) => {
  return (
    <>
      {pessoas.map((pessoa) => {
        const { id, name, day, image } = pessoa;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{day} </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
