import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
  marginTop: 10,
}));

export const BattleMonsterCardDetail = styled(Card)(() => ({
  position: 'absolute',
  width: '307px',
  height: '415px',
  background: '#FFFFFF',
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
}));

export const BattleMonsterCardImage = styled.img(() => ({
  width: '283px',
  height: '178px',
  filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
  borderRadius: '7px',
}));

export const BattleMonsterCardContent = styled(CardContent)(() => ({
  position: 'relative',
}));

export const BattleMonsterCardContentTitle = styled(Typography)(() => ({
  width: '150px',
  height: '26px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '26px',
  color: '#000000',
}));

export const BattleMonsterCardContentProp = styled(Typography)(() => ({
  width: '35px',
  height: '14px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '14px',
  color: '#000000',
  marginTop: 10,
}));
