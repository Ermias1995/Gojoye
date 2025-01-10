import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties, addProperty, updateProperty, deleteProperty } from '../redux/propertySlice';

const Property = () => {
    const dispatch = useDispatch();
    const { properties, loading, error } = useSelector((state) => state.property);
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        propertyType: '',
    });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            dispatch(updateProperty({ id: editing, property: formData }));
        } else {
            dispatch(addProperty(formData));
        }
        setFormData({
            username: '',
            email: '',
            price: '',
            location: '',
            bedrooms: '',
            bathrooms: '',
            propertyType: '',
        });
        setEditing(null);
    };

    const handleEdit = (property) => {
        setFormData(property);
        setEditing(property._id);
    };

    const handleDelete = (id) => {
        dispatch(deleteProperty(id));
    };

    return (
        <div>
            <h1>Property Management</h1>
            <form onSubmit={handleSubmit}>
                <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
                <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <input name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
                <input name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
                <input name="propertyType" value={formData.propertyType} onChange={handleChange} placeholder="Property Type" required />
                <button type="submit">{editing ? 'Update Property' : 'Add Property'}</button>
            </form>

            {loading && <p>Loading properties...</p>}
            {error && <p>{error}</p>}
            <ul>
                {properties.map((property) => (
                    <li key={property._id}>
                        <span>{property.username} - {property.location} - ${property.price}</span>
                        <button onClick={() => handleEdit(property)}>Edit</button>
                        <button onClick={() => handleDelete(property._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Property;