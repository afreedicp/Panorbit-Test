const GoogleMap = ({ lat, lng }) => {
  return (
    <div>
      <iframe
        title='map'
        src={`https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed&amp;disableDefaultUI=true`}
        width='500'
        height='400'
        allowfullscreen='false'
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
