import React, { useCallback, useState } from 'react';
import { UnsupportedChainIdError, useStarknetReact } from '@web3-starknet-react/core';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { QuestBox, QuestCardTitle, QuestCardType, QuestCardDescription } from '../QuestCard/QuestCard.styles';
import { getShortenAddress } from '../../common/addressHelper';
import GradientButton from '../GradientButton/GradientButton';
import claimed from '../../resources/images/claimed.png';

const MintCard = ({ title, description, address, nftImg }) => {
  const [isClaimed, setIsClaimed] = useState(false);

  return (<QuestBox style={{ width: 'fit-content', padding: '30px', marginTop: '20px' }}>
    <div>
      <QuestCardTitle>
        {title}
      </QuestCardTitle>
      <div>
        {getShortenAddress(address)}
      </div>
      <QuestCardDescription>
        {description}
      </QuestCardDescription>
      {!isClaimed &&
        <GradientButton style={{ width: '214px' }} onClick={() => setIsClaimed(!isClaimed)}>
          Claim NFT
        </GradientButton>
      }
      {isClaimed &&
        <QuestBox style={{ width: '214px', padding: '6px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <div style={{ marginRight: '5px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.0492 2.48118C10.8932 1.10454 6.30826 2.7774 3.78919 6.27895C1.24857 9.81057 1.46417 14.7767 4.11487 18.1735C6.77224 21.5787 11.4717 22.8946 15.5158 21.3725C19.3934 19.9129 21.9722 16.1363 22.0004 12.0093C21.9707 7.6771 19.157 3.84191 15.0492 2.48118ZM13.4656 20.4952C9.40686 21.2537 5.27547 18.7734 3.88538 14.9293C2.46021 10.9883 4.17277 6.5582 7.78594 4.49548C11.4424 2.40765 16.0967 3.4417 18.7301 6.64193C19.9626 8.13949 20.5904 10.0851 20.6037 12.0094C20.5746 16.1873 17.5612 19.7298 13.4656 20.4952ZM17.0672 9.64156C16.7556 9.95283 16.444 10.2642 16.1328 10.5755C14.7341 11.9735 13.3354 13.3716 11.9367 14.7696C11.5923 15.1139 11.248 15.458 10.9035 15.8023C10.8206 15.8852 10.7288 15.9429 10.633 15.9805C10.0098 16.2754 9.44598 15.5068 9.04665 15.1077C8.37172 14.4332 7.69711 13.7588 7.02234 13.0843C6.76037 12.8228 6.40896 12.4821 6.57746 12.0681C6.83416 11.4367 7.51544 11.2992 7.99549 11.7791C8.61505 12.3983 9.23419 13.0174 9.85376 13.6365L10.3224 14.1051C11.4451 12.9831 12.5677 11.8608 13.6901 10.7389C14.315 10.1142 14.94 9.4895 15.565 8.86477C15.9796 8.45013 16.5306 7.72048 17.1801 8.21604C17.2129 8.24115 17.2431 8.2692 17.2707 8.2985C17.3005 8.32609 17.3281 8.35632 17.3534 8.38934C17.7122 8.85918 17.4054 9.30347 17.0672 9.64156Z" fill="white" />
            </svg>
          </div>
          NFT Claimed!
        </QuestBox>
      }
    </div>
    <div style={{ position: 'relative' }}>
      {isClaimed &&
        <img src={claimed} style={{ position: 'absolute', bottom: '30px', left: '-40px' }} />
      }
      <img src={nftImg} />
    </div>
  </QuestBox>)
}

export default MintCard;
