import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProperty } from '../redux/propertySlice';
import { toast } from 'react-toastify';

const UpdateProperty = ({ isOpen, onClose, propertyData }) => {
    const dispatch = useDispatch();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        if (propertyData) {
            setProperty(propertyData);
        }
    }, [propertyData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (property) {
            try {
                await dispatch(updateProperty({ id: property._id, property })); // Dispatch update action
                toast.success('Property updated successfully!');
                onClose(); // Close modal after successful update
            } catch (error) {
                toast.error('Error updating property.');
            }
        }
    };

    if (!isOpen || !property) return null; // Return null if modal is not open or property data is not available

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-20">
            <div className="bg-white p-6 rounded shadow-md w-1/2">
                <h2 className="text-2xl font-bold mb-4">Update Property</h2>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label className="block mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={property.title}
                            onChange={handleChange}
                            className="rounded bg-gray-500 text-white p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Description</label>
                        <textarea
                            name="description"
                            value={property.description}
                            onChange={handleChange}
                            className="rrounded bg-gray-500 text-white p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={property.price}
                            onChange={handleChange}
                            className="rounded bg-gray-500 text-white p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={property.location?.address || ''}
                            onChange={(e) => handleChange({ target: { name: 'location', value: { ...property.location, address: e.target.value } } })}
                            className="rounded bg-gray-500 text-white p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">City</label>
                        <input
                            type="text"
                            name="city"
                            value={property.location?.city || ''}
                            onChange={(e) => handleChange({ target: { name: 'location', value: { ...property.location, city: e.target.value } } })}
                            className="rounded bg-gray-500 text-white p-2 w-full mb-2"
                            required
                        />
                    </div>
                    {/* Add other fields as necessary */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Update Property
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;