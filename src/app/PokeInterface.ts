export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites:{
      other:{
        dream_world:{
          front_default: string;
        }
      }
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  }