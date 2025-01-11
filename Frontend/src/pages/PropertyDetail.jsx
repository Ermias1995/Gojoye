import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const PropertyDetail = () => {
    const { id } = useParams(); // Get the property ID from the URL
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`https://gojoye-backend.onrender.com/properties/${id}`);
                setProperty(response.data);
            } catch (err) {
                setError('Error fetching property details.');
                toast.error('Error fetching property details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4 mt-10">
            {property ? (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {property.images && property.images.length > 0 && (
                        <img className="w-full h-64 object-cover" src={property.images[0]} alt={property.title} />
                    )}
                    <div className="p-4">
                        <h2 className="text-3xl font-bold">{property.title}</h2>
                        <p className="text-gray-600">{property.description}</p>
                        <p className="text-gray-600">Location: {property.location.address}, {property.location.city}</p>
                        <p className="text-gray-600">Added By: {property.landlord?.username || 'Unknown'}</p>
                        <p className="text-gray-600">Email: {property.landlord?.email || 'N/A'}</p>
                        <p className="text-xl font-bold text-gray-800 mt-2">Price: ${property.price}</p>
                        <p className="mt-4"><strong>Bedrooms:</strong> {property.bedrooms}</p>
                        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                        {/* Add more property details as needed */}
                    </div>
                </div>
            ) : (
                <p className="text-center">Property not found.</p>
            )}
        </div>
    );
};

export default PropertyDetail;