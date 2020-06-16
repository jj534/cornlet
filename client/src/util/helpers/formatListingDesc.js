const formatListingDesc = (listing) => {
  return (listing.totalRooms || 1) + '-Bedroom ' + listing.type.charAt(0).toUpperCase() + listing.type.slice(1);
}

export default formatListingDesc;
