import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties, deleteProperty } from '../redux/propertySlice';
import { Link } from 'react-router-dom';

const PropertyList = () => {
    const dispatch = useDispatch();
    const { properties, loading, error } = useSelector((state) => state.properties);

    const { userType } = useSelector((state) => ({userType: state.auth.userType}));

    useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProperty(id));
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Property Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.map((property) => (
                    <Link 
                        to={`/properties/${property._id}`} // Set the path to the property details page
                        key={property._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105" // Optional: Add hover effect
                    >
                        {property.images && property.images.length > 0 && (
                            <img className="w-full h-48 object-cover" src={property.images[0]} alt={property.title} />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{property.title}</h3>
                            <p className="text-gray-600">{property.description}</p>
                            <p className="text-gray-600">Location: {property.location.address}, {property.location.city}</p>
                            <p className="text-gray-600">Added By: {property.landlord?.username || 'Unknown'}</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">Price: ${property.price}</p>
                           {userType == 'landlord' && <button 
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent link click when deleting
                                    handleDelete(property._id);
                                }}
                            >
                                Delete
                            </button>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;