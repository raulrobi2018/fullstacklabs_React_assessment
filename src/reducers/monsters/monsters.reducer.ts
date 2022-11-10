import { createReducer } from '@reduxjs/toolkit';
import { Monster, MonsterWinner } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setSelectedMonster, setSelectedComputerMonster, fetchMonstersFight } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedComputerMonster: Monster | null;
  monsterWinner: MonsterWinner | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedComputerMonster: null,
  monsterWinner: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedComputerMonster, (state, action) => ({
    ...state,
    selectedComputerMonster: action.payload,
  }));

  builder.addCase(fetchMonstersFight.pending, (state) => ({
    ...state,
    monsterWinner: null
  }));

  builder.addCase(fetchMonstersFight.rejected, (state) => ({
    ...state,
    monsterWinner: null
  }));

  builder.addCase(fetchMonstersFight.fulfilled, (state, action) => ({
    ...state,
    monsterWinner: action.payload
  }))

});
