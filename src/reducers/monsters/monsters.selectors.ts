import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectSelectedComputerMonster = (state: RootState) =>
  state.monsters.selectedComputerMonster;

export const selectWinner = (state: RootState) => state.monsters.monsterWinner;
