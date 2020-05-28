import React, { useState } from 'react';
import tw from 'tailwind.macro';
import { Text } from '../UI/Text';
import Alert from '../UI/Alert';
import { saveAs } from 'file-saver';
import instagramLogo from "./../../images/instagramLogo.svg";
import downloadLogo from "./../../images/downloadLogo.svg";
import zoomBust from "./../../images/zoomBust.png";

export function ArtistItem({ item }) {
  const [alert, setAlert] = useState(false);
  const [showBust, setShowBust] = useState(false);
  const { artist, company, instagram_name, instagram_link, background_image, video } = item.data;
  function handleClick(e, imageURL) {
    // make sure url doesn't change
    e.preventDefault();

    let extension = imageURL.split('.').pop();
    extension === 'mp4' ? saveAs(imageURL, "stayhome.mp4") : saveAs(imageURL, "stayhome.jpg");

    setAlert(true);
  }

  return (
    <Item>
      <ItemInner>
        <CreditsContainer>
          <Text>{artist} — {company}</Text>
        </CreditsContainer>
        {video.url &&
          <ImageContainer onMouseEnter={() => setShowBust(true)} onMouseLeave={() => setShowBust(false)}>
            <Video autoPlay loop muted src={video.url} />
            {showBust &&
              <BustImage style={{ backgroundImage: 'url(' + zoomBust + ')' }} />
            }
          </ImageContainer>
        }
        {background_image.url &&
          <ImageContainer onMouseEnter={() => setShowBust(true)} onMouseLeave={() => setShowBust(false)}>
            <BackgroundImage style={{ backgroundImage: 'url(' + background_image.url + ')' }} />
            {showBust &&
              <BustImage style={{ backgroundImage: 'url(' + zoomBust + ')' }} />
            }
          </ImageContainer>
        }
        <DownloadContainer>
          <InstagramLink href={instagram_link.url} target="_blank">
            <InstagramLogo src={instagramLogo} alt="IgLogo" />
            <Text>{instagram_name}</Text>
          </InstagramLink>
          {video.url &&
            <DownloadLink href="#" onClick={e => handleClick(e, video.url)}>
              <Text>Download</Text>
              <DonwloadLogo src={downloadLogo} alt="Download" />
            </DownloadLink>
          }
          {background_image.url &&
            <DownloadLink href="#" onClick={e => handleClick(e, background_image.url)}>
              <Text>Download</Text>
              <DonwloadLogo src={downloadLogo} alt="Download" />
            </DownloadLink>
          }
        </DownloadContainer>
      </ItemInner>
      {alert && <Alert setAlert={setAlert} />}
    </Item>
  )
}

const Item = tw.div`
  flex-100p md:flex-50p mb-20 md:mb-10
`;

const ItemInner = tw.div`
  mx-0 md:mx-2
`;

const CreditsContainer = tw.div`
  mb-2 mx-4
`;

const ImageContainer = tw.div`
  relative bg-black h-0 w-full p-0 pb-60p mb-4
`;

const BackgroundImage = tw.div`
  absolute top-0 right-0 bottom-0 left-0 z-10
  bg-cover bg-no-repeat bg-bottom
`;

const Video = tw.video`
  w-full
`;

const BustImage = tw.div`
  absolute top-2 md:top-4 right-0 bottom-0 left-0 z-20
  bg-contain bg-no-repeat bg-bottom 
`;

const DownloadContainer = tw.div`
  mx-4 md:flex md:justify-between md:items-center
`;

const InstagramLink = tw.a`
  flex justify-start no-underline items-center no-underline
  mb-2 md:mb-0 text-lightGrey hover:text-white
`;

const InstagramLogo = tw.img`
  m-0 mr-2
`;

const DownloadLink = tw.a`
  flex justify-end md:justify-start items-center no-underline
  flex-row-reverse md:flex-row text-lightGrey hover:text-white
`;

const DonwloadLogo = tw.img`
  m-0 mr-2 md:mr-0 md:ml-2
`;
