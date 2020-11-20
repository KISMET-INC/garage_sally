import React from 'react';

const AddImage = ({setImage}) => {
    return (
        <>
            <input type="file" onChange={e => setImage(e.target.files[0])} />
        </>
    )
}

export default AddImage;