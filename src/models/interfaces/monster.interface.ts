export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface MonsterWinner {
  winner: Monster,
  tie: boolean
}

export interface FightProps {
  monster1Id: string;
  monster2Id: string;
}