'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateCopies = [];
  const currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(currentState, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete currentState[key];
        });
        break;

      case 'clear':
        for (const key in currentState) {
          delete currentState[key];
        }
        break;

      default:
        throw new Error('Invalid property');
    }

    stateCopies.push({ ...currentState });
  }

  return stateCopies;
}

module.exports = transformStateWithClones;
