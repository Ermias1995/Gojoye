import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const PropertyDetail = () => {
    const { id } = useParams(); 
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { userType } = useSelector((state) => ({userType: state.auth.userType}));

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
                <div className="flex  justify-evenly bg-white rounded-lg overflow-hidden">
                    {property.images && property.images.length > 0 && (<div className='flex flex-col w-2/3'>
                        <img className="h-96 object-cover" src={property.images[0]} alt={property.title} />
                        <h2 className="text-3xl font-bold text-primary mt-4">{property.title}</h2>
                        <p className="text-gray-600">{property.description}</p>
                        <p className="text-gray-600">Location: {property.location.address}, {property.location.city}</p>
                        <p className="text-gray-600">Added By: {property.landlord?.username || 'Unknown'}</p>
                        <p className="text-gray-600">Email: {property.landlord?.email || 'N/A'}</p>
                        </div>
                    )}
                    <div className="p-4 bg-slate-50 rounded">
                        <p className="text-xl  text-gray-800 mt-2">Price: {property.price} Birr</p>
                        <p className="text-xl  text-gray-800 mt-2">Amenities: {property.amenities}</p>
                        <p className="text-xl  text-gray-800 mt-2">Property Type: {property.propertyType}</p>
                        <p className="text-xl  text-gray-800 mt-2">Transaction Type: {property.transactionType}</p>
                        <p className="mt-4"><strong>Bedrooms:</strong> {property.bedrooms}</p>
                        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                        {/* Add more property details as needed */}

                        {userType === 'renter' && <Link to={`/checkout/${property._id}`}>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Proceed to Checkout
                            </button>
                        </Link>}
                        <Link to='/property'>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Back to Properties
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-center">Property not found.</p>
            )}
        </div>
    );
};

export default PropertyDetail;