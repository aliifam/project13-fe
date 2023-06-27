export type RootStackParamList = {
  RoomList: undefined;
  RoomDetail: {room: Room};
};

export interface Room {
  id: string;
  image: string;
  name: string;
  description: string;
  capacity: number;
}
