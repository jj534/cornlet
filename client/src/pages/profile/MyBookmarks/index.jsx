import React from 'react'
import { useSelector } from 'react-redux';
import ListingCard from 'src/components/cards/ListingCard';
import Heading from 'src/components/fonts/Heading';
import MainHeader from 'src/components/headers/MainHeader'
import Navbar from 'src/components/headers/Navbar'
import Space from 'src/components/layouts/Space';
import DynCardList from 'src/containers/DynCardList';

const MyBookmarks = () => {
  const bm = useSelector((state) => state.bm);
  const user = useSelector(state => state.user);
  const listings= user ? user.bm.listings : bm.listings;

  return (
    <div>
      <MainHeader />
      <Navbar />
      <Space margin='2rem 0' />
      <div style={{ paddingLeft: '.5rem' }}>
        <Heading>Bookmarks</Heading>
      </div>
      <Space margin='1rem 0' />
      <DynCardList>
        {listings.map((listing) => (
          <ListingCard
            key={listing._id}
            listing={listing}
          />
        ))}
      </DynCardList>
    </div>
  )
}

export default MyBookmarks
