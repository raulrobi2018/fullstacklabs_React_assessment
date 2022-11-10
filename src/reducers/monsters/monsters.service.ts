import { API_URL } from '../../constants/env';
import { FightProps, Monster, MonsterWinner } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const monsterFight = async (payload: FightProps): Promise<MonsterWinner> => {
  console.log("payload", payload)
  return await fetch(`${API_URL}/battle`, {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify(payload)
  }).then((response) => response.json()).catch((err) => console.log("error en service", JSON.stringify(err, null, 2)));
}

export const MonsterService = {
  getAll,
  monsterFight
};

