import {
  SingleEliminationBracket,
  Match,
} from '@g-loot/react-tournament-brackets';
import { walkOverData } from '../data/tour-data';

export const TourTable = () => {
  return (
    <SingleEliminationBracket
      // @ts-ignore
      matches={walkOverData}
      matchComponent={Match}
      className="mx-auto"
    />
  );
};
