// add all the aync thunk actions here
import { StatusCodes } from 'http-status-codes'
import Demoservice from './../../../services/demo';
import { counterActions } from './../../slices/counter/slice';

// format
// export const fetchProductsData = () => {
//   return async dispatch => {
//     // any sync code with side effects(api calls, set time outs)
//     dispatch();
//   }
// };

export const fetchProductsData = () => {
  return async dispatch => {

    const fetchData = async () => {
      const res = await Demoservice.getAll();

      if(res.status !== StatusCodes.OK) {
        throw new Error('Could Not Fetch');
      }

      return res;
    };

    try {
      const res = await fetchData();
      dispatch(counterActions.updateTotalProducts(res.data.length));
      console.log("from thunk action: ", res)
    } catch (error) {
      console.log("error:", error)
    }
  }
};
