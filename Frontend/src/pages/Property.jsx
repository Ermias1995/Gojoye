import React from 'react'
import AddProperty from '../components/AddProperty';
import PropertyList from '../components/PropertyList';
import { useSelector } from 'react-redux';

function Property() {

  const { userType } = useSelector((state) => ({userType: state.auth.userType}));

  return (
    <div>
        {userType === 'landlord' && <AddProperty />}
        <PropertyList />
    </div>
  )
}
export default Property