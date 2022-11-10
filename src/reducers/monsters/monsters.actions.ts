import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FightProps, Monster, MonsterWinner } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchMonstersFight = createAsyncThunk<MonsterWinner, FightProps>(
  'monsters/fetchMonstersFight',
  MonsterService.monsterFight
);


export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);

