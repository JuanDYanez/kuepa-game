import axios from 'axios'
import { GET_DRIVERS} from './actions-types'


export function getDrivers() {

  return async function (dispatch) {
    try {
      const {data} = await axios.get("http://localhost:3001/drivers");
      return dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (error) {
      console.error(error)
    }
  }
} 