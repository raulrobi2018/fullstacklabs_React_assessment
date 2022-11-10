import {
  CardContent,
  Divider,
  LinearProgress,
  Typography,
} from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCardContentProp,
  BattleMonsterCardContentTitle,
  BattleMonsterCardImage,
  ProgressBar,
} from './MonsterBattleCard.styled';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return !monster ? (
    <BattleMonsterCard centralized>
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
    </BattleMonsterCard>
  ) : (
    <BattleMonsterCard centralized={false}>
      <BattleMonsterCardImage src={monster?.imageUrl} />
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <BattleMonsterCardContentTitle>
        {monster?.name}
      </BattleMonsterCardContentTitle>
      <BattleMonsterCardContentProp>HP</BattleMonsterCardContentProp>
      <ProgressBar value={monster.hp} variant="determinate" />
      <BattleMonsterCardContentProp>Attack</BattleMonsterCardContentProp>
      <ProgressBar value={monster.attack} variant="determinate" />
      <BattleMonsterCardContentProp>Defense</BattleMonsterCardContentProp>
      <ProgressBar value={monster.defense} variant="determinate" />
      <BattleMonsterCardContentProp>Speed</BattleMonsterCardContentProp>
      <ProgressBar value={monster.speed} variant="determinate" />
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
