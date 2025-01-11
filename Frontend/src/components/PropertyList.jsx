import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties, deleteProperty } from '../redux/propertySlice';
import UpdateProperty from './UpdateProperty';
import { Link } from 'react-router-dom';

const PropertyList = () => {
    const dispatch = useDispatch();
    const { properties, loading, error } = useSelector((state) => state.properties);
    const { userType } = useSelector((state) => ({userType: state.auth.userType}));
    const { isLoggedIn } = useSelector((state) => ({isLoggedIn: state.auth.isLoggedIn}));

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProperty(id));
    };

    const handleEdit = (property) => {
        setSelectedProperty(property);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedProperty(null); // Clear selected property when closing
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    console.log(selectedProperty);
    return (
        <div className="container mx-auto p-4 mt-20">
            <h2 className="text-2xl font-bold mb-4">Property Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.map((property) => (
                    <div  key={property._id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        {property.images && property.images.length > 0 && (
                            <img className="w-full h-48 object-cover" src={property.images[0]} alt={property.title} />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{property.title}</h3>
                            <p className="text-gray-600">{property.description}</p>
                            <p className="text-gray-600">Location: {property.location.address}, {property.location.city}</p>
                            <p className="text-gray-600">Added By: {property.landlord?.username || 'Unknown'}</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">Price: ${property.price}</p>
                           
                            <div className="flex items-center gap-2">
                            { isLoggedIn && <Link to={`/properties/${property._id}`} className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">See Details</Link>}
                           {isLoggedIn && userType == 'landlord' &&  <div className='flex items-center gap-2'>
                            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEdit(property)
                                }}>Edit
                            </button>
                           <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(property._id);
                                }}>Delete
                            </button>
                            </div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <UpdateProperty isOpen={isModalOpen} onClose={handleModalClose} propertyData={selectedProperty}/>
        </div>
    );
};

export default PropertyList;