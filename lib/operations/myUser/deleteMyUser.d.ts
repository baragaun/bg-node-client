import { MutationResult } from '../../types/MutationResult.js';
declare const deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<MutationResult<null>>;
export default deleteMyUser;
