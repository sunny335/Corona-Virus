import React from 'react';
import Ticker from 'react-ticker';
const Heading = () => {
  return (
    <div
      className="bg-info text-white border position-fixed"
      style={{ right: 0, left: 0, top: 0, zIndex: 999 }}
    >
      <Ticker height={50}>
        {({ index }) => (
          <>
            <h1>
              Covid-19 cases are rising. States are opening up anyway. The World
              Health Organization on Monday blasted wealthy countries for not
              only hogging Covid vaccines but in doing so, hindering the pathway
              for poorer nations to get them too. WHO director-general Tedros
              Adhanom Ghebreyesus said some rich countries' direct deals with
              manufacturers had meant that #{index}!
            </h1>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default Heading;
