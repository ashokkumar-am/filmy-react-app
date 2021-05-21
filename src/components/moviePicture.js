import React from 'react';

export default moviePicture({ form, field }) => (
    <input
        name={field.name}
        type="file"
        accept="image/*"
        onChange={e => form.setFieldValue(field.name, e.target.files[0])}
    />
);

