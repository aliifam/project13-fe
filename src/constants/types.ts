export type RootStackParamList = {
  Ruangan: undefined;
  RuanganDetail: {room: Ruangan};
};

export interface Ruangan {
  id: string;
  image: string;
  name: string;
  description: string;
  capacity: number;
}
