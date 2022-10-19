import createRootReducer from 'redux-root-reducer';
import { ListaDeTareas} from '../components/ListaDeTareas';

export const rootReducer = createRootReducer(
  ListaDeTareas
);