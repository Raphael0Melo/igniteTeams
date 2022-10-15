import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./playerStorageDTO";

export async function PlayerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {

  try {
    const storedPlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(players => players.name === newPlayer.name)

    if(playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

  } catch (error) {
    throw (error)
  }
}


