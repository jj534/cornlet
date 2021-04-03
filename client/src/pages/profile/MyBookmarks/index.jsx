import React from 'react'
import { useSelector } from 'react-redux';
import ListingCard from 'src/components/cards/ListingCard';
import Heading from 'src/components/fonts/Heading';
import MainHeader from 'src/components/headers/MainHeader'
import Navbar from 'src/components/headers/Navbar'
import { FlexColumn } from 'src/components/layouts/Flex';
import Space from 'src/components/layouts/Space';
import DynCardList from 'src/containers/DynCardList';
import { ReactComponent as NoBookmarksSVGRaw } from 'src/assets/illustrations/no-bookmarks.svg';
import Text from 'src/components/fonts/Text';
import theme from 'src/theme/colors';
import styled from 'styled-components'

const NoBookmarksSVG = styled(NoBookmarksSVGRaw)`
  width: 50%;
  opacity: .9;
  max-width: 200px;
`;

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

      {/* bookmarked listings */}
      <DynCardList>
        {listings.map((listing) => (
          <ListingCard
            key={listing._id}
            listing={listing}
          />
        ))}
      </DynCardList>

      {/* no bookmarks */}
      {/* no listings */}
      {listings && listings.length === 0 && (
        <FlexColumn alignCenter>
          <Space padding='2rem 0' />
          <NoBookmarksSVG />
          <Space margin='1rem 0' />
          <Text variant='h4'>No bookmarks yet!</Text>
          <Text variant='p' color={theme.textMuted}>Bookmark a listing to get started</Text>
        </FlexColumn>
      )}
    </div>
  )
}

export default MyBookmarks
