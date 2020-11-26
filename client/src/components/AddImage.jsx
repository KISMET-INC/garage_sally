import React from 'react';

const AddImage = ({imageHandler}) => {
    return (
        <>
            <input type="file" name="image" onChange={e => imageHandler(e)} />
        </>
    )
}

export default AddImage;