import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { FightProps } from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  fetchMonstersFight,
} from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedComputerMonster,
  selectSelectedMonster,
  selectWinner,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useAppSelector(selectMonsters);
  const selectedMonster = useAppSelector(selectSelectedMonster);
  const selectedComputerMonster = useAppSelector(selectSelectedComputerMonster);
  const winnerMonster = useAppSelector(selectWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    if (selectedMonster && selectedComputerMonster) {
      const fightProps: FightProps = {
        monster1Id: selectedMonster.id,
        monster2Id: selectedComputerMonster.id,
      };
      dispatch(fetchMonstersFight(fightProps));
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {winnerMonster && <WinnerDisplay text={winnerMonster.winner.name} />}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title="Computer"
          monster={selectedComputerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
